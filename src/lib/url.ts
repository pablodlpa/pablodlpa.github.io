const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the deploy base path ("/" or "/<repo>"). */
export const url = (path = '') => `${base}/${path.replace(/^\//, '')}`;
