const Contact = require("../models/userModel");
const mongoose = require("mongoose");
exports.contactSaved = async (req, res) => {
  const { name, phone, address, relation } = req.body;
  const contact = await Contact.create({ name, phone, address, relation });
  res.status(200).json({ status: "success" });
};
exports.saveEditContact = async (req, res) => {
  const { name, phone, address, relation } = req.body;
  let { id } = req.params;
  const contact = await Contact.findByIdAndUpdate(
    id,
    { name, phone, address, relation },
    { new: true, runValidators: true }
  );
  res.status(200).json({ status: "success" });
};
