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
        stage('Running tests'){
            
            steps{
                echo "Running tests..."
                sh 'node --version'
                sh 'npm install'
                sh 'npm run test'
            }
        }
        stage('Build & Deploy on DockerHub') {
            steps {
                echo "Building.."
                // sh 'docker build -t hrishikeshdalal/jest:latest .'
                // sh 'docker ps'
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
