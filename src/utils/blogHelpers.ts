export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getCoverColor(index: number): string {
  const palette = ["#561C24", "#6D2932", "#9B4D54", "#C7B7A3", "#E8D8C4"];
  return palette[index % palette.length];
}
