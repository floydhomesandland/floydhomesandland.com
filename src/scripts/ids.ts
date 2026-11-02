// Unique ids for form controls, so two forms on one page never share an id.
let n = 0;
export const nextId = () => ++n;
