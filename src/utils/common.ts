export function byteSize(bytes: number, decimals: number = 2) {
  if (bytes === 0) return '0 B';
  const scale = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const dm = decimals <= 0 ? 0 : decimals;
  const i = Math.floor(Math.log(bytes) / Math.log(scale));
  if (!sizes[i]) return '0 B';
  return (bytes / Math.pow(scale, i)).toFixed(dm) + ' ' + sizes[i];
}
