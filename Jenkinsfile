node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
    }
    stage('Build'){
      echo 'Starting to build docker image'
      sh 'docker-compose build --force-rm'
    }
    stage('Deploy'){
      echo 'Starting to deploy'
      sh 'docker-compose up -d'
    }
  }
  catch (err) {
    throw err
  }
}
