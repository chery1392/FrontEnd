export default function toLocalDateShort(date: any) {
  return new Date(date).toLocaleDateString("fa-IR", {});
}
