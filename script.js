document.addEventListener('DOMContentLoaded', function () {
    const botaoConverter = document.getElementById("converter-btn");

    botaoConverter.addEventListener("click", function () {
        const nomeBanda = document.getElementById("nome-banda").value.toLowerCase();
        const vogaisParaEmojis = {
            'a': '💛',
            'e': '🎼',
            'i': '🎷',
            'o': '🥁',
            'u': '🎹'
        };

        const consoantesParaEmojis = {
            'b': '🎵',
            'c': '🎶',
            'd': '🎸',
            'f': '🎺',
            'g': '🎻',
            'h': '🎵',
            'j': '🎶',
            'k': '🎸',
            'l': '🎺',
            'm': '🎻',
            'n': '🎵',
            'p': '🎶',
            'q': '🎸',
            'r': '🎺',
            's': '🎻',
            't': '🎵',
            'v': '🎶',
            'w': '🎸',
            'x': '🎺',
            'y': '🎻',
            'z': '🎵'
        };

        let resultado = [];
        for (let letra of nomeBanda) {
            if (vogaisParaEmojis[letra]) {
                resultado.push(vogaisParaEmojis[letra]);
            } else if (consoantesParaEmojis[letra]) {
                resultado.push(consoantesParaEmojis[letra]);
            } else {
                resultado.push(letra); // Mantém espaços ou caracteres especiais
            }
        }

        document.getElementById("resultado").innerHTML = `<h2>${resultado.join('')}</h2>`;
    });
});
