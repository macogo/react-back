/* GLOBAL CONFIG */
let baseURL;
if (process.env.NODE_ENV === 'development') {
  baseURL = '//sheduomcbi.sunshinelunch.com';
} else {
  baseURL = '//sheduomc.sunshinelunch.com';
}

export default { baseURL }