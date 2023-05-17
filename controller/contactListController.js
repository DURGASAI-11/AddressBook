const Contacts = require("../models/userModel");
module.exports.contactList = async (req, res) => {
  if (req.query.q || req.query.filterOption) {
    if (req.query.filterOption) {
      if (req.query.filterOption == "All Contacts") {
        const contactRel = await Contacts.find({});
        res
          .status(200)
          .render("contactList", { title: "contacts", contacts: contactRel });
      } else {
        const queryFilter = req.query.filterOption;
        const contactRel = await Contacts.find({ relation: queryFilter });
        res
          .status(200)
          .render("contactList", { title: "contacts", contacts: contactRel });
      }
    } else {
      const queryString = req.query.q;
      const contact = await Contacts.find({
        name: { $regex: queryString, $options: "i" },
      });
      res
        .status(200)
        .render("contactList", { title: "contacts", contacts: contact });
    }
  } else {
    const contact = await Contacts.find({});
    res
      .status(200)
      .render("contactList", { title: "contacts", contacts: contact });
  }
};

module.exports.getRegisterPage = (req, res) => {
  res.status(200).render("index", { title: "Address Book" });
};

module.exports.deleteContact = async (req, res) => {
  let { id } = req.params;
  await Contacts.deleteOne({ _id: id });
  res.status(200).json({ status: "success" });
};

module.exports.getEditPage = async (req, res) => {
  let { id } = req.params;
  const contact = await Contacts.findOne({ _id: id });
  res
    .status(200)
    .render("specificContact", { title: "Edit", contacts: contact });
};
