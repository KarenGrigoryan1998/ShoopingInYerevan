export const isNumber = e => {
  let charCode = e.which ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    e.preventDefault();
  } else {
    return true;
  }
};
