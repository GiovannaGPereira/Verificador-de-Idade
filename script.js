function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/criança menino.jpg');
            } else if (idade < 18){
                img.setAttribute('src', 'img/jovem homem.jpg');
            } else if (idade < 25) {
                img.setAttribute('src', 'img/jovem adulto homem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem adulto.jpg');
            } else {
                img.setAttribute('src', 'img/idoso homem.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/criança menina.jpg');
            } else if (idade < 18) {
                img.setAttribute('src', 'img/jovem mulher.jpg');
            } else if (idade < 25) {
                img.setAttribute('src', 'img/mulher jovem adulta.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher adulta.jpg');
            } else {
                img.setAttribute('src', 'img/idosa mulher.jpg');
            }
        }
        
        // Estilo para a imagem
        img.style.borderRadius = "50%";
        img.style.width = "200px"; // Define a largura da imagem
        img.style.height = "200px"; // Define a altura da imagem
        
        // Exibindo o resultado
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); // add um objeto ao resultado, variavel 'res', com img que eh a imagem nesse caso
    }
}