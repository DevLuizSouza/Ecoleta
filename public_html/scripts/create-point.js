// Polar  campó estado com dados da API do IBGE
function  populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res)=>{return res.json()})
    .then(states => {
        for(const state of states){
        ufSelect.innerHTML = ufSelect.innerHTML + `<option value = "${state.id}">${state.nome}</option>`
        }
        
    })
}

populateUFs()
// Polar o campo município utilizado
//  dados da API IBGE, passando como parâmetro o estado
function getCities(event){
    const citySelect = document.querySelector("select[name=city]")   
    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    fetch(url)
    .then(res => res.json())
    .then(cities =>{
        for(const city of cities){
            //citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            citySelect.innerHTML = citySelect.innerHTML + `<option value = "${city.id}">${city.nome}</option>`
        }
        citySelect.disabled = false 
        
    })
}



 document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities)