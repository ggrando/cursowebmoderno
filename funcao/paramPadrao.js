function soma1 (a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) // <-- Aqui está o problema

// estrategia 2, 3 e 4 para gerar valor padrao 

function soma2 (a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log('--------')
console.log(soma2())   
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))

console.log('-- Nova versão --')
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())   
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))


// SCRIPT FORNECIDO PELO RD STATION MARKETING

<div role="main" id="fale-com-um-especialista-a9fafe957d34d8b73c73"></div>
<script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
<script type="text/javascript">
  new RDStationForms('fale-com-um-especialista-a9fafe957d34d8b73c73-html', 'UA-99243150-1').createForm();
</script>

// SCRIPT CARREGADO EM SEU SITE

<script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
<script type="text/javascript">
  new RDStationForms('formulario-contato-site-rpa-545b91f71fb1ca345290-html', 'UA-12966166-4').createForm();
</script>