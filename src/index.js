const c = require("centra");

module.exports = async (url, alias = "") => {
  try {
    const res = await c("https://tinyurl.com/api-create.php").query({ url, alias }).send();
    return res.body.toString();
  } catch(e) {
    throw new Error(e)
  }
}