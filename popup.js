document.querySelectorAll('.checkbox').forEach(function (element) {
    console.log(element)
    element.addEventListener('change', function (element) {
        console.log(this.name, this.checked)
        sendMessage({ 'name': this.name, 'value': this.checked })
    })
});
function onError(error) {
    console.log(error)
}
function onError(error) {
    console.log(error)
}
// browser.storage.local.get('popup').then(function(result) {console.log(result)})
function sendMessage(data) {
    console.log("Sending message", data)
    browser.tabs.query({ active: true, windowId: browser.windows.WINDOW_ID_CURRENT })
        .then(tabs => browser.tabs.get(tabs[0].id))
        .then(tab => {
            console.log(tab)
            browser.tabs.sendMessage(tab.id, data)
                .then(response => { console.log("Sent",re) })
                .catch(error => { console.log("Error",error) })
        }).catch(err => { console.log(err) });
}
