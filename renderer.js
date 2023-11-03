const func = async () => {
    console.log('ping')
    const response = await versions.ping();
    console.log(response)// prints out 'pong'
    console.log("what's above?")// prints out 'pong'
};

func();
const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
