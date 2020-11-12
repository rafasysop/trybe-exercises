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
    criaOption.setAttribute('required', true);
    criaOption.innerText = e.value;
    estadoSelect.appendChild(criaOption);
});

const datainicio = document.querySelector('#dataini');
let numeros = [];
datainicio.addEventListener("keypress",(e) => {
   console.log(e.key);
});