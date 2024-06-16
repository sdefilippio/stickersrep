
const stickers = ['stickerImg1', 'stickerImg2', 'stickerImg3'];
stickers.forEach(id => {
    const img = document.getElementById(id);
    img.addEventListener('click', function() {
        img.classList.toggle('red-border');
    });
});


const stickerInputs = [
    document.getElementById('sticker1'),
    document.getElementById('sticker2'),
    document.getElementById('sticker3')
];
const calculateButton = document.getElementById('calculateStickers');
const stickerMessage = document.getElementById('stickerMessage');

calculateButton.addEventListener('click', function() {
    let totalStickers = 0;
    for (let input of stickerInputs) {
        totalStickers += parseInt(input.value) || 0;
    }

    if (totalStickers <= 10) {
        stickerMessage.textContent = `Llevas ${totalStickers} stickers`;
    } else {
        stickerMessage.textContent = 'Llevas demasiados stickers';
    }
});


const digit1 = document.getElementById('digit1');
const digit2 = document.getElementById('digit2');
const digit3 = document.getElementById('digit3');
const checkPasswordButton = document.getElementById('checkPassword');
const passwordMessage = document.getElementById('passwordMessage');

checkPasswordButton.addEventListener('click', function() {
    const password = `${digit1.value}${digit2.value}${digit3.value}`;
    
    switch (password) {
        case '911':
            passwordMessage.textContent = 'password 1 correcto';
            break;
        case '714':
            passwordMessage.textContent = 'password 2 es correcto';
            break;
        default:
            passwordMessage.textContent = 'password incorrecto';
    }
});
