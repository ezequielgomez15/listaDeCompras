let lista = document.getElementById('lista')
let padre = document.getElementById('contenedor')
let pantallaFinal = document.getElementById ('pantallaFinal')
let modalFlotante = document.getElementById('modalFlotante')
let detailImg = document.getElementById('detailImg')
let detailTitle = document.getElementById('detailTitle')
let detailDescription = document.getElementById('detailDescription')

let addButton = document.getElementById('add').addEventListener('click', function(){
    let txt = document.getElementById('input').value
    let select = document.getElementById('select').value
    let area = document.getElementById('textArea').value
    console.log(txt, select, area, 'lo que tiene adentro')
    let modelo = 
        `<li class="list-group-item">
            <span>${select}</span>
            <p>${txt}</p>
            <button onclick="mostrarDetalles('${select}', '${txt}', '${area}')">
                <img src="./public/flecha-correcta.png" alt="flecha detalles">
            </button>
        </li>`
    if(txt != '' && select != ''  && area != ''){
        
        padre.innerHTML += modelo
        txt.value = ''
        select.value = ''
        area.value = ''
        document.getElementById("lista").style.display="block";
        document.getElementById("modalFlotante").style.display="none"; 
    }else{
        let ingresaProductos = document.getElementById('ingresaProductos').innerHTML='complete los formularios por favor.'
    }
    
})

let agregarAlgo = document.getElementById('agregarAlgo')
agregarAlgo.addEventListener('click', function(){
    document.getElementById("seccionVacia").style.display="none";
    document.getElementById("lista").style.display="none";
    document.getElementById("modalFlotante").style.display="block";
})

let mostrarDetalles = (txt, select, area) => {
    pantallaFinal.style.display = 'flex'
    detailTitle.innerHTML = txt
    detailDescription.innerHTML = area
    detailImg.innerHTML = select
    lista.style.display = 'none'
}

let volverAlListado = document.getElementById('volverAlListado')
volverAlListado.addEventListener('click', () =>{
    lista.style.display = 'block'
    pantallaFinal.style.display = 'none'
})

let noAdd = document.getElementById('noAdd')
noAdd.addEventListener('click', () =>{
    lista.style.display = 'block'
    modalFlotante.style.display = 'none'
})


