// ==========================================
// WEB DEVELOPMENT CHALLENGE
// JavaScript
// ==========================================


// Select elements

const userInput =
    document.getElementById("userInput");

const sendButton =
    document.getElementById("sendButton");

const chatMessages =
    document.getElementById("chatMessages");


// Add a message to the chat

function addMessage(text, type) {

    const message =
        document.createElement("div");

    message.className =
        type === "user"
            ? "user-message"
            : "bot-message";

    message.textContent = text;

    chatMessages.appendChild(message);

}


// Send message

async function sendMessage() {

    const text =
        userInput.value.trim();

    if (!text) return;


    addMessage(text, "user");

    userInput.value = "";


    /*
        AI INTEGRATION

        Implement the AI functionality here.

        Use the API instructions provided
        by the organizers.
    */


}


// Button

sendButton.addEventListener(
    "click",
    sendMessage
);


// Enter key

userInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);
