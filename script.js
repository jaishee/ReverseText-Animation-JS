let heading = document.querySelector(".heading")
let text = heading.dataset.text
let speed = parseInt(heading.dataset.speed)

function startForward() {
    let count = 0
    heading.innerHTML = ""

    let forwardInterval = setInterval(() => {
        heading.innerHTML += text.charAt(count)
        count++

        if (count === text.length) {
            clearInterval(forwardInterval)

            // Wait 1s, then start reverse
            setTimeout(() => {
                startReverse()
            }, 1000)
        }
    }, speed)
}

function startReverse() {
    let count = text.length - 1
    let reverseText = ""

    let reverseInterval = setInterval(() => {
        reverseText = text.charAt(count) + reverseText
        heading.innerHTML = reverseText

        count--

        if (count < 0) {
            clearInterval(reverseInterval)

            // Wait 1s, then start forward again
            setTimeout(() => {
                startForward()
            }, 1000)
        }
    }, speed)
}

// Start the first cycle
startForward()
