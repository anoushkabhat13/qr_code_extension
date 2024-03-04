chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log("URL:", url)
    // use `url` here inside the callback because it's asynchronous!
    document.getElementById('urlDisplay').textContent = url;
    const { spawn } = require('child_process');
    function sendToPython(link) {
        const sensor = spawn('python', ['qr_code.py', link]);
        sensor.on('exit', function(code) {
            console.log(`Python process exited with code ${code}`);
        });
    }
    sendToPython(url);
    
});
