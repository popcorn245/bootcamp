import confetti from "canvas-confetti";

let counter = 1;

const user: {
    username: string;
    password: string;
    hash?: number;
} = {
    username: "bobby",
    password: "admin",
};

user.hash = 123;

function messageMe(message: {
    /** A message to the user */
    text: string;
    /**
     * @param count {number} The number of times we message
     */
    options?: any;
}) {
    alert(message.text);

    
    return {
        /** The message sent */
        message: message.text
    };
}

const { message } = messageMe({text: "wee"})

alert(counter);

confetti({
    shapes: ["star"]
}); 