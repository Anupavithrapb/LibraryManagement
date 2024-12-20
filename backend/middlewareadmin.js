const jwt = require('jsonwebtoken');

const checkAdminRole = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: 'Access denied, admin privileges required' });
    }

    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = checkAdminRole;