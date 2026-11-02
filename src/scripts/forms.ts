// Sends website forms to the Airtable automation "Website form → Responses + lead alert".
// Same approach as the campaign landing pages: form-encoded body, no-cors POST.

const COLUMN_KEYS = [
  'name', 'phone', 'email', 'contact_method', 'contact_time', 'property_address',
  'interest', 'asking_price', 'timeline', 'remarks',
];

function valueOf(form: HTMLFormElement, name: string): string {
  const els = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(`[name="${name}"]`));
  const parts = els
    .filter((el) => (el instanceof HTMLInputElement && (el.type === 'radio' || el.type === 'checkbox') ? el.checked : true))
    .map((el) => el.value.trim())
    .filter(Boolean);
  return parts.join(', ');
}

function setError(target: HTMLElement, errEl: HTMLElement | null, message: string | null) {
  if (message) {
    target.setAttribute('aria-invalid', 'true');
    if (errEl) { errEl.textContent = message; errEl.hidden = false; }
  } else {
    target.removeAttribute('aria-invalid');
    if (errEl) { errEl.textContent = ''; errEl.hidden = true; }
  }
}

function validate(form: HTMLFormElement): HTMLElement | null {
  let first: HTMLElement | null = null;
  const errFor = (el: HTMLElement) => {
    const ids = (el.getAttribute('aria-describedby') || '').split(' ');
    const errId = ids.find((id) => id.endsWith('-err'));
    return errId ? document.getElementById(errId) : null;
  };

  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[required], textarea[required]').forEach((el) => {
    const bad = el.type === 'checkbox' ? !(el as HTMLInputElement).checked : !el.value.trim() || !el.checkValidity();
    setError(el, errFor(el), bad ? el.dataset.error || 'Fill in this field.' : null);
    if (bad && !first) first = el;
  });

  // Optional email still has to look like an email if it was filled in.
  form.querySelectorAll<HTMLInputElement>('input[type="email"]:not([required])').forEach((el) => {
    const bad = !!el.value.trim() && !el.checkValidity();
    setError(el, errFor(el), bad ? el.dataset.error || 'Check the email address.' : null);
    if (bad && !first) first = el;
  });

  form.querySelectorAll<HTMLFieldSetElement>('fieldset[data-required="true"]').forEach((fs) => {
    const bad = !fs.querySelector('input:checked');
    setError(fs, errFor(fs), bad ? 'Choose one.' : null);
    if (bad && !first) first = fs.querySelector('input');
  });

  return first;
}

function collectDetails(form: HTMLFormElement): string {
  const lines: string[] = [];
  const seen = new Set<string>();
  form.querySelectorAll<HTMLElement>('[data-detail]').forEach((el) => {
    const label = el.dataset.detail!;
    const name = el instanceof HTMLFieldSetElement
      ? el.querySelector('input')?.name
      : (el as HTMLInputElement).name;
    if (!name || seen.has(name)) return;
    seen.add(name);
    const v = valueOf(form, name);
    if (v) lines.push(`${label}: ${v}`);
  });
  return lines.join('\n');
}

export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-fhl-form]').forEach((form) => {
    if (form.dataset.ready) return;
    form.dataset.ready = 'true';
    const loadedAt = Date.now();
    const status = form.querySelector<HTMLElement>('.status');
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const label = submit?.textContent || 'Send';
    let sending = false;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (sending) return;
      if (status) status.hidden = true;

      const firstBad = validate(form);
      if (firstBad) { firstBad.focus(); return; }

      const thanks = form.dataset.thanks || '/';
      const honeypot = form.querySelector<HTMLInputElement>('input[name="website"]');
      // Likely a bot: hidden field filled in, or finished impossibly fast.
      if ((honeypot && honeypot.value) || Date.now() - loadedAt < 2000) {
        window.location.assign(thanks);
        return;
      }

      const body = new URLSearchParams();
      body.set('source', 'website');
      body.set('form', form.dataset.form || 'Contact');
      COLUMN_KEYS.forEach((k) => {
        const el = form.querySelector<HTMLElement>(`[name="${k}"]`);
        const isDetail = el?.closest('[data-detail]');
        body.set(k, isDetail ? '' : valueOf(form, k));
      });
      body.set('consent', String(!!form.querySelector<HTMLInputElement>('input[name="consent"]')?.checked));
      body.set('details', collectDetails(form));
      body.set('page', form.dataset.page || '');
      body.set('page_url', window.location.href.slice(0, 300));
      body.set('submitted_at', new Date().toISOString());

      sending = true;
      if (submit) { submit.disabled = true; submit.textContent = 'Sending…'; }

      fetch(form.dataset.webhook!, { method: 'POST', mode: 'no-cors', body, keepalive: true })
        .then(() => { window.location.assign(thanks); })
        .catch(() => {
          if (status) {
            status.textContent = `That didn't go through. Check your internet connection and try again, or call Dustin at ${form.dataset.phone}.`;
            status.hidden = false;
          }
          if (submit) { submit.disabled = false; submit.textContent = label; }
          sending = false;
        });
    });
  });
}
