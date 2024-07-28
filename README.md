# Blogify Hub - Where Ideas Thrive

Welcome to Blogify Hub! This is a simple and powerful blogging platform that allows you to create and share your thoughts with the world. This repository contains the source code for a simple and customizable blog app. The app is designed to allow users to create, edit, and delete blog posts, as well as browse through existing posts. It provides a user-friendly interface for managing blog content.

## Features

- **User Authentication:** Securely sign up and log in to start managing your own blog.

- **Create and Edit Posts:** Write and edit your blog posts with an easy-to-use editor.

- **Categories and Tags:** Organize your content by adding categories and tags to your posts.

- **Responsive Design:** Enjoy a seamless experience across devices - desktop, tablet, and mobile.

## Technologies Used

- **React.js**: Used for frontend ui implementation of the app.
- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **JWT**: JSON Web Tokens for authentication.
- **bcrypt**: for hashing the password of users.
- **Cookie-Parser**: for accessing and setting cookies in user's browser securely.
- **Multer**: for storing all the files uploaded on app in our local server.
- **Cloudinary**: for uploading all files from local server to cloudinary cloud.

## Usage

- Sign up for an account or log in if you already have one.
- Create a new post and start writing your content.
- Save and publish your post to make it visible to others.
- Explore other posts on the platform, and engage with the community.
  
## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- React.js and vite installed and running

  - #### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/syedwasee07/blogify-hub.git
    cd blogify-hub.git
    ```

2. Install server dependencies:

    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:

    ```bash
    cd client
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
    cd server
    npm run dev
    ```

   The server will run on http://localhost:8000.

2. Start the client:

    ```bash
    cd client
    npm run dev
    ```

   The client will run on http://127.0.0.1:5173/.

3. Open your browser and visit  http://127.0.0.1:5173/ to access the blog application.

## Frontend of BLOGIFYHUB - Where Ideas Thrive.

### Screenshots of UI 

- Home page
![Home](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/af9e428e-daa2-4af3-af86-f186ceda8d09)
![Home2](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/1a02c0a7-b7fc-4239-953f-dbd3a98c2482)

- Home page after user login
![Home After Login](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/07661302-a165-49cd-b8e5-daeab7ecbc3a)

- Authors page
![Authors](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/44ff6337-7e36-4d92-9fb6-83f09769f9ed)

- Authors Post page
![authorpostpage](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/9cb71926-4263-4a48-8dfa-6948e3302094)

- Login page
![Login](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/8ebc8ac1-c35f-4840-b9f8-f6b01b5e2920)

- Register page
![Register](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/f6c66c45-3bb4-437b-ba85-95f99c7f6109)

- User Profile page
![UserProfile](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/eae871eb-281f-4aee-be07-5947fc84d0b3)

- User Dashboard page
![UserDashboard](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/897e3fec-3d0e-470f-aa7c-f20ef8c248df)

- Blog details page
![Blogdetail page](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/a809d3e9-bbe9-4e79-bb4a-b91e73e28bd9)
![Blogdetail page2](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/43dd3966-d442-475e-9138-4cd7c2cabc19)

- Create Post page
![createpost page](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/38eb9fb4-78a9-4f9f-bf71-a361adb5ea6e)

- Edit Post page
![edit post page](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/4457f95b-c2ab-4f19-933f-befc20959154)

- Post page by Category
![postbycategorypage](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/8239b4c1-2493-44c0-b683-ad794db3085b)

## Backend of BLOGIFYHUB - Where Ideas Thrive.

### API Documentation

- All api are tested using Postman and api documentation is also published using Postman, link is below
- **Link:** https://documenter.getpostman.com/view/32463080/2s9Yytg1Ae

### Screenshots of API testing via postman

#### Users API's
- Get all authors API
![Screenshot1](https://github.com/SyedWaseem07/Blogify-Hub-Backend/assets/125558233/1e1e2fc6-5931-4301-95be-e26729121419)

- Register User API
![Screenshot2](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/0a326c27-a81e-429f-b0d7-e2c65d611b6d)

- Login User API
![Screenshot3](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/f705fb68-0edf-487a-9571-dc4dd9fe7f30)

- Logout User API
![Screenshot4](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/29d44b33-68fe-4b90-b35b-53b6f1acc2e8)

- Change User Avatar API
![Screenshot5](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/d51fc9fd-5d85-451f-a622-6f658ebff90f)

- Update User Profile API
![Screenshot6](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/12ab8d5c-c1a0-428d-acfb-1957c960a86b)

- Get User Profile API
![Screenshot7](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/e599dd34-29a1-4377-b264-3af8df6ca03e)

### Posts API's

- Get all post API
![Screenshot8](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/ece7ab18-ff4e-402b-a36c-ca19d5e48ab0)

- Create post API
![Screenshot9](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/23f06a31-678e-4845-b40e-986d9826f4df)

- Get single post API
![Screenshot10](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/fd9081a8-0583-42f9-a990-a7c5733f1665)

- Edit single post API
![Screenshot11](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/0afea078-af44-483d-ac5c-5e66ba3b7c22)

- Delete single post API
![Screenshot12](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/0b71f942-78ce-45f2-a334-bb312cecd5d2)

- Get posts by Category API
![Screenshot13](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/ddb74022-73e4-4bdc-8d7e-b7a6584022fd)

- Get posts by Author API
![Screenshot14](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/582e2b30-6612-4c84-912c-70e3dfae83fb)

## The End
