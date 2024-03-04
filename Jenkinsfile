pipeline {
    agent any
    tools {
        jdk 'jdk17'
        nodejs 'node16'
    }
    environment {
        SCANNER_HOME = tool 'sonar-scanner'
    }
    
    stages {
        stage('clean workspace') {
            steps {
                cleanWs()
            }
        }

        stage('checkout from Git') {
            steps {
                git branch: 'main', url: 'https://github.com/prajwal-jagadeesh/zomato_clone-new.git'
            }
        }
        
        stage('Sonarqube Analysis') {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=zomato -Dsonar.projectKey=zomato '''
                }
            }
        }
        
        stage('quality Gate') {
            steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'sonar-token'
                }
            }
        }
        
        stage('Docker Build and Push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                        sh "docker build -t zomato ."
                        sh "docker tag zomato prajwaldevops01/zomato:latest"
                        sh "docker push prajwaldevops01/zomato:latest"
                    }
                }
            }

        }
        
        stage('Deploy to container') {
            steps {
                sh "docker run -d -p 3000:3000 prajwaldevops01/zomato:latest"
            }
        }
    }
}