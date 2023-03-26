const container = document.querySelector("#container")
const btn = document.querySelector("#btn")


//localstorage: already givn data present as Array Object - step 1
 //[{"id":"123","content":"sample1"},{"id":"345","content":"sample2"},{"id":"678","content":"sample3"}]

function data() {
    return JSON.parse(localStorage.getItem("dummy-data")||"[]")
}


//create element - step 3
const createElement=(id, content)=>{
    const main = document.createElement('div')
    const newElement = document.createElement('textarea')
    newElement.classList.add('textarea')
    newElement.value=content;
    const cancel = document.createElement('button')
    cancel.innerText= 'X'
   const list = main.append(newElement, cancel)
    container.append(list)

    // cancel.classList.add('cancel-btn')
    // newElement.append(cancel)
    //  d.innerHTML= `<button class="cancel-btn">X<button>`

    container.insertBefore(newElement, btn)

    newElement.addEventListener('change',()=>{updateData(id, newElement.value)});

    return newElement;
}



//data iteration- step 2
data().forEach((element) => {
      createElement(element.id, element.content)
 
 });

//user-given data json - step 4
function addnotes(){
  let datas= data()
const newData = {
    id: Math.floor(Math.random()*10000),
    content: ""
}
const newCreate =createElement(newData.id, newData.content)
container.insertBefore(newCreate, btn)
datas.push(newData)
saveData(datas)
}
 btn.addEventListener('click', ()=>addnotes())

//to store all Json data
function saveData(datas){
     localStorage.setItem("dummy-data",JSON.stringify(datas))
}

//update content
let updateData=(id, content)=>{  
    let datas= data();
    const records =datas.filter((element)=>element.id==id)[0];
    records.content = content
    saveData(datas) 
}




