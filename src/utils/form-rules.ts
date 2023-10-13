export const formRules = {
  required: {
    value: true,
    message: "Field ini Harus diisi",
  },
  minNominal: (number: number) => ({
    value: number,
    message: "Harus lebih besar dari " + number,
  }),
};

export function getVariant(dirty: boolean, error: boolean) {
  if (error) {
    return "primary";
  }
  return !dirty ? "default" : "green";
}
