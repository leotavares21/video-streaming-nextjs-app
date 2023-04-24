export function handleStyleButton(variant: string | undefined) {
  if (variant === 'primary') {
    return 'btn btn-primary';
  }

  if (variant === 'accent') {
    return 'btn border-2 border-accent';
  }

  if (variant === 'gray') {
    return 'btn border-2 border-gray-200';
  }
  return;
}
