export function handleStyleButton(variant = 'primary'): string | undefined {
  const styles = {
    primary: 'btn btn-primary',
    accent: 'btn border-2 border-accent',
    gray: 'btn border-2 border-gray-200',
    black:
      'btn bg-black text-gray-50 font-medium rounded-full hover:brightness-90'
  };
  return styles[variant as keyof typeof styles];
}
