# DEVOPS-PROJECT
# 💼 Shashank Suryawanshi — Portfolio Website

This is my personal portfolio website to showcase my skills, projects, resume, and contact information. It is built using modern web technologies and automatically deployed using a Jenkins CI/CD pipeline.

## 🌐 Live Demo

[🔗 Visit Portfolio Website]([https://your-portfolio-link.com](http://localhost:3030/)) *(Replace with your actual link)*

---

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Framework:** React.js / Next.js *(update if needed)*
- **Styling:** Tailwind CSS / Bootstrap / SCSS *(choose what applies)*
- **CI/CD:** Jenkins
- **Hosting:** AWS EC2 / Netlify / Vercel *(update as per your deployment setup)*

---

## 🧰 Features

- About Me section
- Projects gallery with GitHub links
- Resume download
- Contact form or social links
- Responsive mobile-first design
- Jenkins CI/CD pipeline for automated testing and deployment

---

## 🔁 CI/CD Pipeline with Jenkins

### ✔️ Workflow Overview:

1. **Code Push** to GitHub triggers Jenkins job (via webhook).
2. **Jenkins Pipeline** performs:
   - Pull latest code from the repository
   - Install dependencies
   - Run tests (if any)
   - Build the project
   - Deploy to target server (e.g., AWS EC2 or other)

### 🧪 Sample Jenkinsfile:

```groovy
pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/shashanksuryawanshi41/portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Example: Copy build files to EC2 server via SCP or rsync
                sh 'scp -r ./build user@your-server-ip:/var/www/html'
            }
        }
    }
}
