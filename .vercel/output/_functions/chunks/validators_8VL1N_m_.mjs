function isValidEmail(email) {
  const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function isValidPhone(num) {
  const regex = /[+0-9]{1,3}[-][0-9]{1,3}[0-9]{1,3}[0-9]{1,4}/;
  return regex.test(num);
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  isValidEmail,
  isValidPhone
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, isValidEmail as a, isValidPhone as i };
