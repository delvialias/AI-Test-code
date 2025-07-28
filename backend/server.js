const express = require('express');
const cors = require('cors');
const { sequelize, User, ensureDatabase } = require('./models');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Ensure DB and sync models
(async () => {
  await ensureDatabase();
  await sequelize.sync();
  console.log('Database and tables ready');
})();

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, mobile } = req.body;
    const user = await User.create({ email, password, firstName, lastName, mobile });
    res.json({ success: true, userId: user.id });
  } catch (err) {
    console.error('Registration error:', err);
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Registration failed' });
    }
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, password } });
  if (user) {
    res.json({ success: true, userId: user.id });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)); 