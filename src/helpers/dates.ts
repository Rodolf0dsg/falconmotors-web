
export const parseLocalDate = (v: string) => {
  const [yy, mm, dd] = v.split("-").map(Number);
  return new Date(yy, mm - 1, dd);
};

export const startOfDay = (d: Date) => {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
};

export const formatTime = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  const suffix = hour >= 12 ? "pm" : "am";
  const h12 = hour % 12 || 12;
  return `${h12}:${minute} ${suffix}`;
};