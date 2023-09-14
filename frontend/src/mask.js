export const moneyFormat = (value, unit = "R$") =>
  value
    ? `${unit} ${parseInt(value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "{thousand}")
        .replace(/{thousand}/g, ".")}`
    : "--";

export const digitOnly = (val) => String(val || 0).replace(/[^\d]/g, "");
export const cepDigitOnly = (val) => String(val).replace(/[^\d]/g, "");

export const cepFormat = (cep) =>
  String(cep)
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
