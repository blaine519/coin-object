let coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2)
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        if (this.state === 0) {
            return 'heads'
        } else {
            return 'tails'
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        let image = document.createElement('img')

        if (this.state === 0) {
            image.src = './images/heads.png'
        } else {
            image.src = './images/tails.png'
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
}

let body = document.querySelector('body')
let newDiv = document.createElement('div')

function display20Flips () {
    for (let index = 0; index < 20; index += 1) {
        coin.flip()
        let result = coin.toString()
        body.append(result + ' ')
    }
}

function display20Images () {
    for (let index = 0; index < 20; index += 1) {
        coin.flip()
        let resultImage = coin.toHTML()
        body.append(resultImage)
    }
    body.append(newDiv)
}

display20Flips()
display20Images()