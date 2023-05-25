export const validationEmail = (value) => {
  const regEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  return regEx.test(value);
};

export const validationPhone = (value) => {
  const phoneRegex = /^([+]?[0-9\s-\(\)]{12,12})*$/i;

  return phoneRegex.test(value);
};
