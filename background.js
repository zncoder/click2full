browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({file: 'page.js'})
    .then(() => {}, (err) => console.log(err))
})
