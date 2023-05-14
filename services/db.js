import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
});

export const connectToDatabase = async () => {
  try {
    await db.connect();
    const client = db.getClient();
    await db.end();
    return client;
  } catch (error) {
    throw new Error('Connection to DB cant be established!');
  }
};

export const getUserByEmail = async (email) => {
  let results = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return results;
};

export const registerUser = async (email, password) => {
  const newUser = await db.query(
    'INSERT INTO users (email,password) VALUE (?,?)',
    [email, password]
  );
  return newUser;
};

// export const getUsers = async () => {
//   let results = await db.query('SELECT * FROM users');
//   return results;
// };
