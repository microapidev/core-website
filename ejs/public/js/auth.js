const hideAlert = () => {
    const el = document.querySelector('.alert');

    //removing CHILD
    if (el) el.parentElement.removeChild(el);
}


//type is 'success' or 'error'
const showAlert = (type, msg) => {
    hideAlert()
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, 5000)

};

class CreateApi {
    //save the information
    async Saveapi(userdata) {
        const url = "http://auth.microapi.dev/v1/register";

        try {
            let savedata = await axios.post(url,
                //  mode: "same-origin",
                //  credentials: "same-origin",
                userdata,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }, {
                timeout: 1000
            }
            )
            return savedata
        } catch (error) {
            showAlert('error', "An error occurred, please try again later");
        }


    };


    //login method will follow
     //save the information
     async loginApi(userdata) {
        const url = "http://auth.microapi.dev/v1/login";

        try {
            let savedata = await axios.post(url,
                //  mode: "same-origin",
                //  credentials: "same-origin",
                userdata,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }, {
                timeout: 1000
            }
            )
            return savedata
        } catch (error) {
            showAlert('error', "An error occurred, please try again later");
        }


    }

}