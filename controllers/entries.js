const Entry = require('../models/Entry')

module.exports = {
    getEntries: async(req, res) => {
        console.log(req.user)
        try {
            const journalEntries = await Entry.find({ userId: req.user.id })
            const unreadEntries = await Entry.countDocuments({ userId: req.user.id, read: false })
            res.render('Entries.ejs', { Entries: journalEntries, left: unreadEntries, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    createEntry: async(req, res) => {
        try {
            await Entry.create({ entry: req.body.entryItem, read: false, userId: req.user.id })
            console.log('entry has been added!')
            res.redirect('/Entries')
        } catch (err) {
            console.log(err)
        }
    },
    markRead: async(req, res) => {
        try {
            await Entry.findOneAndUpdate({ _id: req.body.entryIdFromJSFile }, {
                read: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch (err) {
            console.log(err)
        }
    },
    markUnread: async(req, res) => {
        try {
            await Entry.findOneAndUpdate({ _id: req.body.entryIdFromJSFile }, {
                read: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        } catch (err) {
            console.log(err)
        }
    },
    deleteEntry: async(req, res) => {
        console.log(req.body.entryIdFromJSFile)
        try {
            await Entry.findOneAndDelete({ _id: req.body.entryIdFromJSFile })
            console.log('Deleted entry')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    }
}