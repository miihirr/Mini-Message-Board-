const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY created_at DESC");
  return rows;
}

async function addMessage(content) {
  await pool.query("INSERT INTO messages (content) VALUES ($1)", [content]);
}

module.exports = {
  getMessages,
  addMessage,
};
