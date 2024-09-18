// generate random str which we will use as id for now
export const randomStrGenerator = (length) => {
  let str = "";
  const strCollection =
    "qwertyuioppasdfghjklzxcvbnmQQQQWERTYUIOPASDFGHJKLZXCVBNM";

  for (let i = 0; i < length; i++) {
    const charPosition = Math.round(Math.random() * strCollection.length);
    str += strCollection[charPosition];
  }

  return str;
};
