# 🏥 Clinic Management System

## Project Overview

The Clinic Management System, named **ClinicPro**, is a comprehensive web application designed & developed to streamline and effieciently manage the operations of a home clinic. The system facilitates efficient handling of patient information, appointments, medicines, reports, and payments. It leverages the power of MongoDB for database management, Mongoose for data modeling, and various modern web technologies for the front-end and back-end development.

## ✨ Features

1. **🔓 Login without entering credentials.**
2. **🌗 Dual theme UI.**
3. **🖥️ User-friendly dynamic UI with loaders, spinners, etc.**
4. **🔄 Skeleton loading for every component.**
5. **⚡ API calls with React Query (caching, invalidation).**
6. **✅ Form validation (login to appointment, patient, payment, report, medicine).**
7. **👨‍⚕️👩‍💼 Dynamic UI for doctor and receptionist.**
8. **🔐 Strong authentication and rock-solid authorization.**

## 👨‍⚕️👩‍💼 Doctor's Functionalities

1. **📊 Dashboard to see patient count, revenue, average appointments (all daily, weekly, monthly in real time).**
2. **🔍 Searching functionality of patients.**
3. **👤 Details of single patient including medicine, reports, payment, last visited.**
4. **📅 Remaining appointment status.**

## 👩‍💼 Receptionist's Functionalities

1. **➕ Add appointment.**
2. **📝 Add patient details from appointments; auto-delete appointment after addition.**
3. **🔄 Update details of existing patients.**
4. **❌ Delete medicine by name for the same patient during addition.**
5. **📄 Add/delete report and payment.**
6. **🔍 Search patients.**
7. **👤 Own profile: Update profile, change password, change avatar.**
8. **📅 View all appointments.**

## 🛠️ ClinicPro Tech Stack

### Frontend
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Daisy UI](https://img.shields.io/badge/Daisy_UI-FFBDBD?style=for-the-badge&logo=daisyui&logoColor=white)

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- ![bcrypt.js](https://img.shields.io/badge/bcrypt.js-007ACC?style=for-the-badge&logo=javascript&logoColor=white)
- ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)

### Database
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

### Third-party Tools/Libraries
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
- ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
- ![Tanstack React-Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
- ![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-00D8FF?style=for-the-badge&logo=react&logoColor=white)

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running (or use cloud deployed cluster).
- React.js and vite installed and running

  - #### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/syedwasee07/ClinicPro-Manage-with-Ease.git
    cd ClinicPro-Manage-with-Ease.git
    ```

2. Install server dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Install client dependencies:

    ```bash
    cd frontend
    npm install
    ```

4. Create a `.env` file in the `server` directory with the following content:

    ```bash
    PORT=your_port
    MONGO_DB_URI=your_DB_URL
    CORS_ORIGIN=*
    ACCESS_TOKEN_SECRET=your_access_token
    ACCESS_TOKEN_EXPIRY=your_access_token_expiry
    
    REFRESH_TOKEN_SECRET=your_refresh_token
    REFRESH_TOKEN_EXPIRY=your_refresh_token_expiry
    
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

   Replace `your_DB_URL` with your MongoDB connection string.

- 
1. Start the server:

    ```bash
    cd backend
    npm run dev
    ```

   The server will run on http://localhost:8000.

2. Start the client:

    ```bash
    cd frontend
    npm run dev
    ```

   The client will run on http://127.0.0.1:5173/.

3. Open your browser and visit  http://127.0.0.1:5173/ to access the ClinicPro.

## Frontend of ClinicPro - Manage with Ease.

### Screenshots of UI 

- Home page
![Home](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/af9e428e-daa2-4af3-af86-f186ceda8d09)
![Home2](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/1a02c0a7-b7fc-4239-953f-dbd3a98c2482)

- Home page after user login
![Home After Login](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/07661302-a165-49cd-b8e5-daeab7ecbc3a)

- Authors page
![Authors](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/44ff6337-7e36-4d92-9fb6-83f09769f9ed)
