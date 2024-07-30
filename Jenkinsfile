pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'hrishikeshdalal/jest:latest'
    }
    stages {
        stage('Build and Push') {
            steps {
                withDockerRegistry(credentialsId: 'hrishikeshdalal-dockerhub') {
                    docker.build(DOCKER_IMAGE)
                    docker.push(DOCKER_IMAGE)
                }
            }
        }
    }
}
