export function handleTextColor(activeTab: number, tabNumber: number) {
  const isActive = activeTab === tabNumber;
  if (isActive) {
    return 'text-primary';
  }
  return 'text-gray-200';
}

export function handleCircleVisibility(activeTab: number, tabNumber: number) {
  const isActive = activeTab === tabNumber;
  if (isActive) {
    return 'opacity-1';
  }
  return 'opacity-0';
}
