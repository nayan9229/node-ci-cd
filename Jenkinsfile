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
          sh 'docker build -t app --no-cache .'
          sh 'docker tag app demo_apis'
      }
      sh 'docker build -t app --no-cache .'
      sh 'docker tag app demo_apis'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker run -d -p 8090:8080 --name DempAPIs demo_apis:latest'
      }
      sh 'docker run -d -p 8090:8080 --name DempAPIs demo_apis:latest'
    }
  }
  catch (err) {
    throw err
  }
}
