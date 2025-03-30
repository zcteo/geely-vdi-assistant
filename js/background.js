chrome.action.onClicked.addListener((tab) => {
    if (tab.id) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
                // 触发自定义事件，通知 content.js 重新输入密钥
                window.dispatchEvent(new Event("resetTOTP"));
            }
        });
    }
});
