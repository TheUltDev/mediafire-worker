export function isQuickkey(key: unknown) {
  const LENGTH_QUICK_KEY = 15;
  const LENGTH_QUICK_KEY_OLD = 11;
  if (!key || typeof key !== 'string') return false;
  if (key.length !== LENGTH_QUICK_KEY && key.length !== LENGTH_QUICK_KEY_OLD) return false;
  if (/[^a-z0-9]/.test(key)) return false;
  return true;
}

export function isCollectionKey(key: unknown) {
  const LENGTH_COLLECTION_KEY = 15;
  if (!key || typeof key !== 'string') return false;
  if (key.length !== LENGTH_COLLECTION_KEY) return false;
  if (/[^a-z0-9]/.test(key)) return false;
  return true;
}
