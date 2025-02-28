export default class Counter {
    count = 0;
    #counterEl;

    constructor({count = 0, seletor = "#count"} = {}) {
        this.count = count;
        document.addEventListener("DOMContentLoaded", () => {
            this.#counterEl = document.querySelector(seletor);
            this.#counterEl.textContent = this.count;
    
            document.querySelector(".add-count").addEventListener("click", () => {
                this.addCount();
            });
        });
    }

    addCount() {
        this.count += 1;
        this.#counterEl.textContent = this.count;
    }

    resetCount() {
        this.count = 0;
        this.counterEl.textContent = this.count;
    }
}