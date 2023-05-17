const express = require("express");
const contactListController = require("../controller/contactListController");
const router = express.Router();

router.get("/", contactListController.getRegisterPage);
router.get("/contactList", contactListController.contactList);
router.get("/contactList/:id", contactListController.getEditPage);
router.delete("/contactList/:id", contactListController.deleteContact);

module.exports = router;
