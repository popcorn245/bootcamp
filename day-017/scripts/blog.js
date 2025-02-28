import Counter from "./startCounter.js";

const blogCounter = new Counter();
const newCounter = new Counter({count: 120, selector: "#count-2"});

setInterval(() => {
    blogCounter.addCount();
    console.log(newCounter);
}, 1000);

