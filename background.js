// console.log('Extension Enabled')
// storage.local()
browser.runtime.onMessage.addListener(function (message){
    console.log("Message from the background script:");
    console.log(message,typeof message);
    browser.storage.local.set(message).then(setItem, onError);
    console.log("Finished command")
    browser.storage.local.get("HideRecommend").then(function (value){console.log(value)}, onError)
});
function onError(error) {
    console.log(error)
}
function setItem() {
    console.log('Item set succefuly')
}