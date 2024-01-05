const buttons = document.querySelectorAll('.button')
const screen = document.querySelector('body')

buttons.forEach(function (val) {
    val.addEventListener('click', function (event) {
        const rang = event.target.id
        switch (rang) {
            case 'grey':
                screen.style.backgroundColor = rang;
                break;
            case 'yellow':
                screen.style.backgroundColor = rang;
                break;
            case 'white':
                screen.style.backgroundColor = rang;
                break;
            case 'blue':
                screen.style.backgroundColor = rang;
                break;
            case 'teal':
                screen.style.backgroundColor = rang;
                break;
            default:
                break;
        }
        // if (event.target.id == 'grey')
        // screen.style.backgroundColor = event.target.id
    })
})