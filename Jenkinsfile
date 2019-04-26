node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build'){
      if(env.BRANCH_NAME == 'master'){
          sh 'docker build -t demo_apis --no-cache .'
          sh 'docker tag demo_apis latest'
      }
      sh 'docker-compose build'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker run -d -p 8090:8080 --name DempAPIs demo_apis:latest'
      }
      sh 'docker-compose up -d'
    }
  }
  catch (err) {
    throw err
  }
}
