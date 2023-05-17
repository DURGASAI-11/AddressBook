module.exports.getRegisterPage = (req, res) => {
  res.status(200).render("index", { title: "Address Book" });
};
