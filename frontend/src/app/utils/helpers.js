export function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("de-DE", {
    dateStyle: "medium",
  });
}
