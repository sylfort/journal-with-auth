const Entry = require("../models/entry");
var moment = require("moment");

module.exports = {
  getEntries: async (req, res) => {
    console.log(req.user);
    try {
      const journalEntries = await Entry.find({ userId: req.user.id });
      const totalEntries = await Entry.countDocuments({ userId: req.user.id });
      res.render("Entries.ejs", {
        Entries: journalEntries,
        total: totalEntries,
        user: req.user,
        moment: moment,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createEntry: async (req, res) => {
    try {
      await Entry.create({
        title: req.body.titleItem,
        entry: req.body.entryItem,
        read: false,
        userId: req.user.id,
      });
      console.log("entry has been added!");
      res.redirect("/entries");
    } catch (err) {
      console.log(err);
    }
  },
  deleteEntry: async (req, res) => {
    console.log(req.body.entryIdFromJSFile);
    try {
      await Entry.findOneAndDelete({ _id: req.body.entryIdFromJSFile });
      console.log("Deleted entry");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
