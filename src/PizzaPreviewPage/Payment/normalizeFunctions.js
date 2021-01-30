export const normalizeCardNumber = (value) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || ""
    );
  };

 export const normalizeDateCard = (value) => {
    return value.replace(/(\d{2})+(\d{4})/, "$1/$2")?.substr(0, 7) || "";
  };

 export const normalizeCVV = (value) => {
    return value.substr(0, 3) || "";
  };
