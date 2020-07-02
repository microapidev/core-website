//This  is the Jenkinsfile for the core-website microapi.
pipeline {
    agent any
 
    options {
        skipDefaultCheckout(true)
    }
 
    stages {
        stage('Git') {
            steps {
                echo '> Checking out the Git version control ...'
                checkout scm
            }
        }
        stage('Setup') {
            steps {
                echo '>  Setting up volumes ...'
                sh 'make setup'
            }
        }
        stage('Dev') {
            steps {
                echo '> Provisioning a Development enviroment ...'
                sh 'make dev'
            }
        }
        
        stage('Build') {
            steps {
                echo '> Building the Project files for testing ...'
                sh 'make build'
            }
        }
        stage('Test') {
            steps {
                echo '> Carrying out a unit test ...'
                sh 'make test'
            }
        }
    }
}