let valor;
//função recebe os valores dos botões
function botao(num){
    valor = document.calc.visor.value += num; 
}

//função reset do visor
function reset(){
    document.calc.visor.value = "";
}

//função calcula as operações
function calcula(){
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString('pt-br');
}