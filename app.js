const normalize = num => {
    return num.replace(/[^0-9]/gi, '');
};

const onload = () => {
    let generateBtn = document.getElementById('generate-btn');
    let number = document.getElementById('number');
    let message = document.getElementById('message');
    let result = document.getElementById('result');
    let resultContainer = document.getElementById('result-container');
    let copy = document.getElementById('copy');

    number.value = localStorage.getItem('last-number') || '';
    message.value = localStorage.getItem('last-message') || '';

    generateBtn.addEventListener('click', e => {
        let normalizedNumber = normalize(number.value);
        let text = message.value.trim();
        let url = `https://wa.me/${normalizedNumber}`; 
        if (text.length > 0) url += `?text=${encodeURIComponent(text)}`;

        result.href = url;
        result.innerText = url;
        resultContainer.classList.remove('hidden');

        localStorage.setItem('last-number', number.value);
        localStorage.setItem('last-message', message.value);
    });

    copy.addEventListener('click', e => {
        if (!navigator.clipboard)
            alert("Seu navegador não suporta cópia para a área de transferência!");
        navigator.clipboard.write(result.href);
    });
};

window.addEventListener('load', onload);