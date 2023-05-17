const express = require("express");
const saveContactController = require("../controller/savaController");
const router = express.Router();

router.post("/", saveContactController.contactSaved);
router.patch("/editContact/:id", saveContactController.saveEditContact);

module.exports = router;
