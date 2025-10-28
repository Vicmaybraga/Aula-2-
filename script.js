function calcular(){
    // passo 1 - obter o valor que o usuário digitou no INPUT
    // passo 2 - realizar o calculo
    // passo 3 - alterar o conteudo do que tem na tag SPAN

    let valorbr = document.getElementById("valorbr").value;
    let valorus = valorbr * 5.043;
    document.getElementById("valor").innerHTML = valorus;
}
   

