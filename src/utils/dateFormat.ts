export default function dateFormat(date: string) {
  const localDate = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
  }).format(new Date(date));
  const localTime = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "medium",
  }).format(new Date(date));

  return localDate + " " + localTime;
}
