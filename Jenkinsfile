node {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: master"
      //sh 'docker -v'
      //sh 'printenv'
    }
    stage('Build'){
      sh 'npm install'
      sh 'cd client'
      sh 'npm install'
      sh 'npm run dev'
     //sh 'docker build -t react-test -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      //sh 'docker run --rm react-test'
    }
    stage('Clean Docker test'){
      //sh 'docker rmi react-test'
    }
    stage('Deploy'){
//      if(env.BRANCH_NAME == 'master'){
//        sh 'docker build -t react-app --no-cache .'
//        sh 'docker tag react-app localhost:5000/react-app'
//        sh 'docker push localhost:5000/react-app'
//        sh 'docker rmi -f react-app localhost:5000/react-app'
      }
    }
