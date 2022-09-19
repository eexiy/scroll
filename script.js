class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.element)
        this.top = obj.top
        this.element.style.position = 'fixed'
        this.element.style.top = this.scroll()

        this.unit = obj.unit

        window.addEventListener('scroll', () => this.scroll())
    }

    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0
        } else if (this.unit == '%' || this.unit == undefined) {
            return innerHeight - this.element.clientHeight
        }
    }

    scroll() {
        this.number = this.scrollNumber()

        if (this.number - scrollY > 0) {
            this.element.style.top = this.number - scrollY + 'px'
        } else {
            this.element.style.top = 0
        }
    }
}

const scroll = new Scroll({
    element: '.header__nav',
    top: 100
})

class Tap {
    constructor(obj) {
        this.element = document.querySelector(obj.element)
        this.element.addEventListener('click', () => {
            this.randomPx()
        })
    }

    randomPx() {
        this.element.style = `
        ${this.getRandomWord(1, 2)}: ${this.getRandomNum(10, 50)}px;
        `
    }

    getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomWord(min, max) {
        let word = Math.floor(Math.random() * (max - min + 1)) + min
        return word === 1 ? 'margin-left' : 'margin-right'
    }

}


const tap = new Tap({
    element: '.header__content'
})