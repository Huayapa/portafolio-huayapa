
export function isValidEmail(email:string) {
  const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
export function isValidPhone(num:string) {
  const regex = /[+0-9]{1,3}[-][0-9]{1,3}[0-9]{1,3}[0-9]{1,4}/;
  return regex.test(num);
}