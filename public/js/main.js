const deleteBtn = document.querySelectorAll('.fa-trash')
const entryItem = document.querySelectorAll('span.not')
const entryComplete = document.querySelectorAll('span.read')

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteEntry)
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