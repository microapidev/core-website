const loginNewUser = new CreateApi()
const loginUI = new UI()




//create a variable
const loginForm = document.getElementById('login')
loginForm.addEventListener('submit', (e) => {
    //prevent the form from its normal event
    e.preventDefault();
    //alert("here i am to worship")
    //get the values of the forms items
    const txtEmail = document.getElementById('email').value
    const txtpassword = document.getElementById('password').value
    // const txtcpassword=document.getElementById('confirmPassword').value

    //validation point or you can create a function for validation
    if (txtEmail === '' || txtpassword === '') {
        //send in the message and the required css class to the ui class method
        //console.log("enter all fields")
        loginUI.printMessage('All fields are mandatory', 'error')
    } else {
        //forward the info to the class method
        const userdata = {
            email: txtEmail,
            password: txtpassword

        }
        //start a spinner via the ui class
        try {
            loginNewUser.loginApi(userdata)
                .then(data => {
                    const cur = data.status

                    if (cur === 200) {

                        loginUI.printMessage('Successfully registered', 'sucus')
                    } else {
                        loginUI.printMessage('An error occured,check your input', 'error')
                    }
                })
        } catch (error) {
            if (cur === 400) {
                loginUI.printMessage('An error occured,check your input', 'error')
            }
            else if (cur === 404) {
                loginUI.printMessage('An error occured from server with bad request', 'error')
            }

        }

    }

})