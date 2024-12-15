
const jwt = require('jsonwebtoken');


const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    
    const token = jwt.sign(
      { username: ADMIN_USERNAME, isAdmin: true }, 
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({ message: 'Admin login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in admin', error });
  }
};
module.exports = { loginAdmin };
