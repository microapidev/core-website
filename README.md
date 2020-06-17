# Team-Microapi

![Node.js CI](https://github.com/hngi/Team-Incredible-BE/workflows/Node.js%20CI/badge.svg?branch=develop)

-   ## Contribute 🕸 Clone the development branch and get to work
-   [Overview :notebook_with_decorative_cover:](#overview-notebook_with_decorative_cover)
-   [Installation and running server (Development) :gear:](#installation-and-running-server-gear)
-   [API :cloud_with_lightning:](#api-cloud_with_lightning)
-   [Docker(Production) :eight_spoked_asterisk:](#docker-eight_spoked_asterisk)
-   [Links :link:](#links-link)

## Overview :notebook_with_decorative_cover: 
This is a the microdev.api website designed by Team-Incredibles. Currently under constructuin by Team-Microapi

## Installation and running server :gear:
* Clone the repo to your local machine using your _terminal_ or _command prompt_, and afterwards, navigate into the root folder  
```shell script
$ cd microapi-main-website
```

* Install necessary dependencies for the project to run successfully
```shell script
$ yarn install
```

* After installing, you can now start the server
```shell script
$ yarn start
Listening on port 3000
```

point your browser to ```localhost:3000```

## API :cloud_with_lightning: 
Two API's were consumed for the development of this project
* Login API
* Registration API  

To see the test written for these api, run this command in your command line
```shell script
yarn test
```
The test is targeted at the _./test/unit/**_ folder

##### Test written  :bulb:

**Login**  :key:

```
    Test the login page
        Test to cheeck if email and password exists
            Signing in with a verified email and password
                ✓ should respond 200
            Signing in with an unerified email and password
            ✓ should respond with 404
``` 

**Signup** :door:

```
  Test the signup page
    Test to check if all fields
      ✓ should verify if all fields are entered correctly
      ✓ verify if it sends an error message if 
        all fields are empty

    Test to check if password mactch
      ✓ should return false if password and 
        confirmpassword don't match
      ✓ should return true if password and 
        confirmpassword don't match
      
    Test to check if password fiels is not empty
      ✓ verify if it sends an error message if 
        password field is empty

    Test to check if email is a valid email
      ✓ should return false if email is invalid
      ✓ should return true if email is valid'

    Test to check if email field is not empty
      ✓ verify if it sends an error message if email field is
        not filled and entered
    
    Test to check if email is not in right format
      ✓ verify if it sends an error message if email field is not
        in the right format
```



##  Docker :eight_spoked_asterisk:  
So, the server is running on a linux os, and containerized with docker.  
The following steps needs to be taken  

* Run a ```$ ls -al``` command to see if _run_docker.sh_ is available in the projests' parent directory

* Edit _run_docker.sh_ with the _nano_ command by inputting your desired name and port number in variables **IMAGENAME** and **Port**
```$ nano run_docker.sh```

* Make run_docker.sh an executable
``$ chmod +x run_docker.sh`` which is in the project home directory

* Edit your Nginx conf to proxy off **localhost:PORT** in _location_ block where 
**PORT** (e.g 3000) is nodejs system default programmed port as found in the ```config.js``` file
    ```
     location / {
                    proxy_pass http://localhost:Port;
            }
    ```

* Execute the _run_doker.sh_ file
```$ ./run_docker.sh```


## Links :link:

* Visit us at <a href="https://microapi.dev/" target="_blank">Microapi</a>
* <a href="https://www.nginx.com/resources/wiki/start/topics/examples/full/" target="_blank">How to write an Nginx config file</a>
* <a href="https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093" target="_blank">A better way to develop Node.js with Docker</a>
* <a href="https://mochajs.org/" target="_blank">Writing tests with Mocha</a>


### Contributors :book:
* **Team-Incredible, Team-Microapi** :nerd_face:
