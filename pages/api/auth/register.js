import { connectToDatabase, getUserByEmail, registerUser } from '@/services/db';
import { hashPassword } from '@/services/helpers';

const handler = async (req, res) => {
  // CHECKING CONNECTION
  try {
    await connectToDatabase();
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }

  const { email, password } = req.body;

  // CHECKING IS USER ALREADY IN DB
  const isUserExist = await getUserByEmail(email);
  if (isUserExist.length == 1) {
    res.status(401).json({ message: 'User already exist in DB' });
    return;
  }

  // HASHED PASSWORD /   ADD USER TO DB
  const user = await registerUser(email, await hashPassword(password));

  res.status(231).json({ message: 'Succesfully registred!' });
};

export default handler;
