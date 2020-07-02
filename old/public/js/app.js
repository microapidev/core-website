const createuser = new CreateApi()
const ui = new UI()


//create a variable
const form = document.getElementById('regis')
form.addEventListener('submit', (e) => {
    //prevent the form from its normal event
    e.preventDefault();
    //alert("here i am to worship")
    //get the values of the forms items
    const txtEmail = document.getElementById('email').value
    const txtpassword = document.getElementById('password').value
    const txtcpassword = document.getElementById('confirmPassword').value

    //validation point or you can create a function for validation
    if (txtEmail === '' || txtpassword === '') {
        //send in the message and the required css class to the ui class method
        //console.log("enter all fields")
        ui.printMessage('All fields are mandatory', 'error')
    } else if (txtpassword !== txtcpassword) {
        //  console.log("password didnt correspond")
        ui.printMessage("Password didn't match", "error")
    } else {
        //forward the info to the class method
        const userdata = {
            email: txtEmail,
            password: txtpassword,
            confirmPassword: txtcpassword,
        }
        //start a spinner via the ui class
        try {
            createuser.Saveapi(userdata)
                .then(data => {
                    const cur = data.status

                    if (cur === 200) {
                        ui.printMessage('Successfully registered', 'sucus')
                    } else {
                        ui.printMessage('An error occured,check your input', 'error')
                    }
                })
        } catch (error) {
            if (cur === 400) {
                ui.printMessage('An error occured,check your input', 'error')
            }
            else if (cur === 404) {
                ui.printMessage('An error occured from server with bad request', 'error')
            }

        }

    }

})


