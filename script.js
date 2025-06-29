const chatWindow = document.querySelector('#chatWindow');
function handleSubmit(event) {
    event.preventDefault();
    const chatWindow = document.querySelector('#chatWindow');
    // scrolling does not work
    setTimeout(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 0);
    const inputField = document.querySelector('#testInput');
    const userMessage = inputField.value.trim();
    console.log('User message:', userMessage);
}