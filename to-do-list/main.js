window.addEventListener("load",()=>{
    const form =document.querySelector("#new-task-form");
    const input =document.querySelector("#new-task-input");
    const listElement = document.querySelector("#tasks");

    form.addEventListener("submit", e=>{
        e.preventDefault();

        const task = input.value;

        const taskElement = document.createElement("div");
        taskElement.classList.add("task")

        const taskContent = document.createElement("div")
        taskContent.classList.add("content")

        taskElement.append(taskContent)

        const taskInput = document.createElement("input")
        taskInput.classList.add("text")
        taskInput.type="text"
        taskInput.value =task;
        taskInput.setAttribute("readonly","readonly")
        taskContent.append(taskInput);
        
        const taskAction = document.createElement("div");
        taskAction.classList.add("actions");

        const taskEdit= document.createElement("i")
        taskEdit.classList.add("fa-solid");
        taskEdit.classList.add("fa-pencil");

        const taskDeleteElement= document.createElement("i")
        taskDeleteElement.classList.add("fa-solid");
        taskDeleteElement.classList.add("fa-trash");

        taskAction.append(taskEdit);
        taskAction.append(taskDeleteElement)

        taskElement.append(taskAction);

        listElement.append(taskElement)

        input.value = ""

        taskEdit.addEventListener("click", e=>{
            if(taskEdit.classList.contains("fa-pencil")){
                taskEdit.classList.replace("fa-pencil", "fa-floppy-disk")
                taskInput.removeAttribute("readonly");
                taskInput.focus()
            }
            else{
                taskEdit.classList.contains("fa-floppy-disk");
                taskEdit.classList.replace("fa-floppy-disk", "fa-pencil");
                taskInput.setAttribute("readonly","radonly");

            }
        })

        taskDeleteElement.addEventListener("click", e=>{
            taskElement.remove();

        })


    } )
})