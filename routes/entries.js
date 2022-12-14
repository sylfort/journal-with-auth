const express = require("express");
const router = express.Router();
const EntriesController = require("../controllers/entries");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, EntriesController.getEntries);

router.post("/createEntry", EntriesController.createEntry);

router.delete("/deleteEntry", EntriesController.deleteEntry);

module.exports = router;
