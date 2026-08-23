let empresas=[];

async function init(){

empresas=await fetch("data/empresas.json").then(r=>r.json());

render(empresas);

document.getElementById("kpis").innerHTML=
`<div class="card"><b>${empresas.length}</b> empresas objetivo</div>`;

}

function render(lista){

document.getElementById("cards").innerHTML=

lista.map(e=>`

<div class="card">

<h3>${e.empresa}
<span class="tag">${e.prioridad}</span>
</h3>

<p><b>Área:</b> ${e.area}</p>

<p><b>Salario:</b> ${e.salario}</p>

<p><b>Estado:</b> ${e.estado}</p>

<p><b>Puerta:</b> ${e.puerta}</p>

</div>

`).join("");

}

function filtrar(){

const q=document.getElementById("busqueda").value.toLowerCase();

render(empresas.filter(e=>

Object.values(e).join(" ").toLowerCase().includes(q)

));

}

init();