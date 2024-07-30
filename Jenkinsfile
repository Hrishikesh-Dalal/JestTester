pipeline {
    agent {
        node {
                label 'docker-hub-node'
            }
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('hrishikeshdalal-dockerhub')
    }
    stages {
        // stage('Running tests'){
        //     agent {
        //         node {
        //             label 'docker-hub-node'
        //         }
        //     }
        //     steps{
        //         sh 'node --version'
        //         echo "Running tests..."
        //     }
        // }
        stage('Build & Deploy on DockerHub') {
            steps {
                echo "Building.."
                // sh 'docker build -t hrishikeshdalal/jest:latest .'
                sh 'docker --version'
            }
        }
        stage('Login'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        // stage('Push'){
        //     steps{
        //         // sh 'docker push hrishikeshdalal/jest:latest'
        //     }
        // }
    }
    post {
        always{
            sh 'docker logout'
        }
    }
}
