const container = document.querySelector(".container")
const inputBox = document.querySelector("#input-box")
const addButton = document.querySelector(".input-field button")
const pendingTasks = document.querySelector(".pending-tasks")
const clearAllButton = document.querySelector(".clear-btn")
const ulList  = document.querySelector(".container ul")
const remove = document.querySelector(".todo-list i")


addButton.addEventListener("click", addList)

document.addEventListener("click", (e)=> {
    if(e.target.className === "fa-solid fa-trash") {

        localStorage.removeItem(e.target.parentNode.firstChild.innerHTML, "Todo List")

        e.target.parentNode.remove()

        TasksNumber()

    }
})

clearAllButton.addEventListener("click", clearAllList)



window.addEventListener("load", function() {
    if(this.localStorage.length) {
        ulList.innerHTML = ""
        for(let [key, value] of Object.entries(localStorage)) {

            let liList = document.createElement("li")

            let pList = document.createElement("p")
            pList.innerHTML = key
    
            let iList = document.createElement('i')
            iList.className = "fa-solid fa-trash"
    
            ulList.appendChild(liList)
            liList.appendChild(pList)
            liList.appendChild(iList)
        }
    }
    inputBox.focus()
    TasksNumber()

})


function addList() {
    if(inputBox.value.length !== 0) {
        
        localStorage.setItem( inputBox.value ,"Todo List")

        let liList = document.createElement("li")

        let pList = document.createElement("p")
        pList.innerHTML = inputBox.value

        let iList = document.createElement('i')
        iList.className = "fa-solid fa-trash"

        ulList.appendChild(liList)
        liList.appendChild(pList)
        liList.appendChild(iList)

        inputBox.value = ""
        inputBox.focus()

        TasksNumber()

    }
}

function TasksNumber() {
    pendingTasks.innerHTML = ulList.children.length
}

function clearAllList() {
    ulList.innerHTML = ""
    localStorage.clear()
    TasksNumber()


    
}