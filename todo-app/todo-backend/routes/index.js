const express = require('express');
const redis = require('../redis')
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});


router.get('/statistics', async (_, res) => {
  try {
    const count = await redis.getAsync('added_todos')
    res.json({
      added_todos: count ? parseInt(count) : 0
    })
  }
  catch (error) {
    console.error(`Redis error: ${error}`);
    res.status(500).json({ error: 'Could not fetch statistics' });
  }
})

module.exports = router;
