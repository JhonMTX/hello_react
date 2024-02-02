export function groupBy<K, V>(
  list: V[],
  keyGetter: (item: V) => K
): Map<K, V[]> {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

// temp solution that may not be needed when switching to
// brands-ui calendar component
export function formatDate(dateString: string) {
  const [year, month, day] = dateString.split('-');
  return `${month}/${day}/${year}`;
}

export function getStepID(pathName: string) {
  if(pathName.startsWith('/vacation')) {
    return 1;
  }
  if(pathName.startsWith('/rooms')) {
    return 2;
  }
  if(pathName.startsWith('/flights')) {
    return 3;
  }
  if(pathName.startsWith('/guests')) {
    return 4;
  }

  return 0;
}

export const toParam = (obj:object) => Object.keys(obj).map(key => `${key}=${obj[key as keyof object]}`).join('&');