export const moneyFormat = (value, unit = "R$") =>
  value
    ? `${unit} ${parseInt(value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "{thousand}")
        .replace(/{thousand}/g, ".")}`
    : "--";

export const digitOnly = (val) => String(val || 0).replace(/[^\d]/g, "");
