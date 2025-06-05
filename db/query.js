const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY created_at DESC");
  return rows;
}

async function addMessage(username, content) {
  await pool.query(
    "INSERT INTO messages (username, content) VALUES ($1, $2)",
    [username, content]
  );
}

module.exports = {
  getMessages,
  addMessage,
};
