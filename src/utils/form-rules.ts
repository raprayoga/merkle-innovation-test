export const formRules = {
  required: {
    value: true,
    message: 'Field ini Harus diisi',
  },
  email: {
    value: /\S+@\S+\.\S+/,
    message: 'must be in email format',
  },
  minNominal: (number: number) => ({
    value: number,
    message: 'Harus lebih besar dari ' + number,
  }),
  minLength: (number: number) => ({
    value: number,
    message: 'minimum length ' + number,
  }),
}

export function getVariant(dirty: boolean, error: boolean) {
  if (error) {
    return 'red'
  }
  return !dirty ? 'default' : 'green'
}
