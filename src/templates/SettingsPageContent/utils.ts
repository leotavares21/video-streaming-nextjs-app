export function handleIfIsEditing(isEditing: boolean) {
  if (isEditing) {
    return 'opacity-100 z-10';
  }
  return 'opacity-0 -z-10';
}
