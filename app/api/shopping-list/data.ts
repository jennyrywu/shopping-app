const listByUser = new Map<string, Set<string>>();

export function getList(userId: string) {
  return Array.from(listByUser.get(userId) ?? []);
}

export function toggleInList(userId: string, productId: string) {
  const set = listByUser.get(userId) ?? new Set<string>();
  if (set.has(productId)) set.delete(productId);
  else set.add(productId);
  listByUser.set(userId, set);
}
