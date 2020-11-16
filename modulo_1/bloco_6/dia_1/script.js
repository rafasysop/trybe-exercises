const estados = [
	{ key: "AC", value: "Acre" },
	{ key: "AL", value: "Alagoas" },
	{ key: "AP", value: "Amapá" },
	{ key: "AM", value: "Amazonas" },
	{ key: "BA", value: "Bahia" },
	{ key: "CE", value: "Ceará" },
	{ key: "DF", value: "Distrito Federal" },
	{ key: "ES", value: "Espírito Santo" },
	{ key: "GO", value: "Goiás" },
	{ key: "MA", value: "Maranhão" },
	{ key: "MT", value: "Mato Grosso" },
	{ key: "MS", value: "Mato Grosso do Sul" },
	{ key: "MG", value: "Minas Gerais" },
	{ key: "PA", value: "Pará" },
	{ key: "PB", value: "Paraíba" },
	{ key: "PR", value: "Paraná" },
	{ key: "PE", value: "Pernambuco" },
	{ key: "PI", value: "Piauí" },
	{ key: "RJ", value: "Rio de Janeiro" },
	{ key: "RN", value: "Rio Grande do Norte" },
	{ key: "RS", value: "Rio Grande do Sul" },
	{ key: "RO", value: "Rondônia" },
	{ key: "RR", value: "Roraima" },
	{ key: "SC", value: "Santa Catarina" },
	{ key: "SP", value: "São Paulo" },
	{ key: "SE", value: "Sergipe" },
	{ key: "TO", value: "Tocantins" }
];
const estadoSelect = document.querySelector('#estado');
estados.forEach((e) => {
    let criaOption = document.createElement('option');
    if (e.key == 'PB') {
        criaOption.setAttribute('selected', 'selected');
    }
    criaOption.id = e.key;
    criaOption.setAttribute('name', e.key);
    criaOption.innerText = e.value;
    estadoSelect.appendChild(criaOption);
});

const enviar = document.querySelector('#enviar');
enviar.addEventListener('click', (e) => {
    document.querySelector('#resultado').style.display = 'block';
    document.querySelector('#rnome').innerHTML = document.querySelector('#nome1').value;
    document.querySelector('#remail').innerHTML = document.querySelector('#email').value;
    document.querySelector('#rcpf').innerHTML = document.querySelector('#cpf').value;
    document.querySelector('#rend').innerHTML = document.querySelector('#end').value;
    document.querySelector('#rcidade').innerHTML = document.querySelector('#cidade').value;
    document.querySelector('#restado').innerHTML = document.querySelector('#estado').value;
    // document.querySelector('#rtipo').innerHTML = document.querySelector('#tipo').value;
    document.querySelector('#rresumo').innerHTML = document.querySelector('#resumo').value;
    document.querySelector('#rcargo').innerHTML = document.querySelector('#cargo').value;
    document.querySelector('#rdescargo').innerHTML = document.querySelector('#desCargo').value;
    document.querySelector('#rdataini').innerHTML = document.querySelector('#dataini').value;
});
const limpar = document.querySelector('#limpar');
limpar.addEventListener('click', (e) => {
    document.querySelector('#resultado').style.display = 'none';
    document.querySelector('#nome1').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#cpf').value = '';
    document.querySelector('#end').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#estado').value = '';
    document.querySelector('#resumo').value = '';
    document.querySelector('#cargo').value = '';
    document.querySelector('#desCargo').value = '';
    document.querySelector('#dataini').value = '';
});
