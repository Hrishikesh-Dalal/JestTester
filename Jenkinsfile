pipeline {
    agent any
    pollSCM 'H/5 * * * *'
    environment {
        DOCKERHUB_CREDENTIALS = credentials('hrishikeshdalal-dockerhub')
    }
    stages {
        stage('Build & Deploy on DockerHub') {
            steps {
                echo "Building.."
                sh 'docker build -t hrishikeshdalal/jest:latest .'
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push'){
            steps{
                sh 'docker push hrishikeshdalal/jest:latest'
            }
        }
    }
    post {
        always{
            sh 'docker logout'
        }
    }
}
