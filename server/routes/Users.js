const express = require('express');
const router = express.Router();
const { Users } = require('../models');
let Yup = require('yup');

router.get('/', async (req, res) => {
  const listOfUsers = await Users.findAll();
  return res.json(listOfUsers);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await Users.findByPk(id);
  return res.json(user);
});

const validationSchema = Yup.object().shape({
  userFirstName: Yup.string().required(),
  userSecondName: Yup.string().required(),
  userEmail: Yup.string().email().required(),
  userDate: Yup.date().required(),
});

router.post('/', async (req, res) => {
  const user = req.body;
  try {
    await validationSchema.validate(user);
  } catch {
    return res.status(400).send({
      message: 'Event validation failed',
    });
  }
  await Users.create(user);
  return res.json(user);
});

router.put('/:id', async (req, res) => {
  const user = req.body;
  const id = req.params.id;
  try {
    await validationSchema.validate(user);
  } catch {
    return res.status(400).send({
      message: 'Event validation failed',
    });
  }
  await Users.update(user, { where: { id } });
  res.json(user);
});

router.delete('/:eventId', async (req, res) => {
  const eventId = req.params.eventId;
  await Users.destroy({
    where: {
      id: eventId,
    },
  });
  return res.json('Deleted');
});

module.exports = router;
