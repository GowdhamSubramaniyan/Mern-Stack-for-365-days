export function saveData(key,data){localStorage.setItem(key,JSON.stringify(data));}
export function loadData(key){const data=localStorage.getItem(key);if(!data)return null;return JSON.parse(data);}
