console.log(document.getElementById('YoutubeSwitchHideSidebar'));
browser.runtime.onMessage.addListener(function (message,sender,sendResponse){
    console.log("Message from the background script:");
    console.log(message);
    if (message.name == 'HideRecommend'){
        document.getElementById('related').hidden = message.value;
    } else if (message.name == 'HideSidebar'){
        document.getElementById('secondary').hidden = message.value;
    } else if (message.name == 'HideComments'){
        document.getElementById('comments').hidden = message.value;
    } else if (message.name == 'HideChannelInfo'){
        document.getElementById('info').hidden = message.value;
        document.getElementById('meta').hidden = message.value;
    }
});

