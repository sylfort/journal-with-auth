const deleteBtn = document.querySelectorAll('.del')
const entryItem = document.querySelectorAll('span.not')
const entryComplete = document.querySelectorAll('span.read')

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteEntry)
})

Array.from(entryItem).forEach((el) => {
    el.addEventListener('click', markRead)
})

Array.from(entryComplete).forEach((el) => {
    el.addEventListener('click', markUnread)
})

async function deleteEntry() {
    const entryId = this.parentNode.dataset.id
    try {
        const response = await fetch('Entries/deleteEntry', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'entryIdFromJSFile': entryId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markRead() {
    const entryId = this.parentNode.dataset.id
    try {
        const response = await fetch('Entries/markRead', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'entryIdFromJSFile': entryId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markUnread() {
    const entryId = this.parentNode.dataset.id
    try {
        const response = await fetch('Entries/markUnread', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'entryIdFromJSFile': entryId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}