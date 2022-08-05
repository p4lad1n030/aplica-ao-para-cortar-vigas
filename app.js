var tamanhoviga = Number($("#tamanhoviga").val());
var esquadro = Number($("#tamanhoesq").val());
var tmn = tamanhoviga - 6;
var esquad = esquadro * 2;
var tot = tmn + esquad

// função que mostra o resultado
function correcao() {
  if (tamanhoviga == 0 || esquadro == 0) {
    window.alert('Parece que você esqueceu de digitar alguma das informações')
  }
}


// função para exibir o resultado:

$('#res').click(() => {
  var tamanhoviga = Number($("#tamanhoviga").val());
  var esquadro = Number($("#tamanhoesq").val());
  var esc = $('[name = lados]')
  if (esc[0].checked) {
    var tmn = tamanhoviga - 6;
    var esquad = esquadro * 2;
    var total = tmn + esquad
    var tot = (total / 100).toFixed(2)
    $('#res1').html(`
    <p class='h1 p-3 mb-2 container text-muted'>
    Você deve cortar o(s) ferro(s) com: ${tot}metros.
    </p>`)
  } else {
    var tmn = tamanhoviga - 6;
    var esquad = esquadro * 1;
    var total = tmn + esquad
    var tot = (total / 100).toFixed(2)
    $('#res1').html(`
    <p class='h1 p-3 mb-2 container text-muted'>
    Você deve cortar o(s) ferro(s) com: ${tot}metros.
    </p>
    `)
  }
})
$('#res').click(()=>{
$('#tamanhoviga').val('')
$("#tamanhoesq").val('')
})

























// $('#res').on('click', () => {
//   var tamanhoviga = Number($("#tamanhoviga").val())
//   var esquadro = Number($("#tamanhoesq").val());
//   tamanhoviga =Number('') ;
//   esquadro =Number('') ;
// })

// function reset() {
//   var tamanhoviga = Number($("#tamanhoviga").val());
//   var esquadro = Number($("#tamanhoesq").val());
//   tamanhoviga = 0;
//   esquadro = 0;
// }
