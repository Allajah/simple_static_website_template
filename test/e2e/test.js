module.exports = {
    tag: 'demo',
    'Demo test Google': (client) => {
        client.url('http://www.google.com').waitForElementVisible('body', 1000).assert.title('Google').assert.visible('input[type=text]').end()
    }
}
