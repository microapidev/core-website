class UI{
//create a message method
    printMessage(message,className){
        const div=document.createElement('div')
        div.className = className
        div.innerHTML = message
        const messageDiv = document.querySelector('.messages');
        messageDiv.appendChild(div)
        //remove the message
        setTimeout(()=>{
            document.querySelector('.messages div').remove()
        },4000)
    }

    //you can have more UI stuff here

   
}
