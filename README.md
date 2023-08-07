# Before starting I want to tell you that there is another readme.md in spanish in case you are interested. Thank you

# TaskManagerApplication Frontend - Developed with Angular

<p align="center">
  <a href="https://angular.io/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">Angular is a framework for web applications developed in <a href="https://www.typescriptlang.org/" target="_blank">TypeScript.</a></p>
  
Welcome to the frontend of TaskManagerApplication! Here you will find an intuitive and attractive user experience thanks to the technologies and libraries that have been used. The goal is to provide you with an easy-to-use and visually pleasing task management application. Below, I present the details of our implementation in Angular.

## Technologies and Libraries Used
I have leveraged various technologies and libraries to create a modern and user-friendly interface:

1. **Angular**: The frontend is developed with Angular, a powerful framework that allows us to create dynamic and robust web applications.
2. **Bootstrap**: I used Bootstrap to achieve a responsive and elegant design. This helps the application adapt to different devices and screen sizes.
3. **Angular Animations**: I implemented animations to enhance the user experience and make interaction with the application more enjoyable and smooth.
4. **Font Awesome**: For icons, I incorporated Font Awesome, which offers a wide variety of icons to improve the aesthetics and usability of the application.
5. **RxJS**: I used RxJS to work with asynchronous data streams and efficiently handle events.
6. **ngx-toastr**: I implemented ngx-toastr to display notifications and messages in an elegant and non-intrusive way, improving communication with the user.

## Key Features
### 1. Secure Login and Registration
To ensure security and protect user privacy, I have implemented an authentication system based on tokens. When a user registers or logs in, they are provided with a token that is stored in the LocalStorage. This token is used to authenticate the user in each request, ensuring that only authorized users can access the application.

### 2. Auth Routing
I have implemented an authentication routing system (routing guards) to restrict access to certain pages of the application to unauthenticated users. If a user tries to access a protected page without being logged in, they will be automatically redirected to the login page.

### 3. Intuitive and Attractive Interface
I have made efforts to design an intuitive and attractive user interface. The components and visual elements are carefully crafted to facilitate navigation and provide a pleasant user experience.

### 4. Smooth Animations
I have incorporated smooth animations to enrich the user interaction with the application. Animations are applied to page transitions, buttons, and other key elements to make the application usage more engaging.

## Instructions for Use
To use TaskManagerApplication frontend, follow these steps:

1. Make sure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project folder and install the dependencies by running npm install.
4. Run ng serve to start the development server.
5. Open your browser and visit http://localhost:4200 to see the application in action.

## Contribute
I would love to receive contributions from the community. If you encounter issues, have improvement ideas, or want to add new features, I will be thrilled to receive your Pull Requests!

## Support
If you have questions, issues, or comments, do not hesitate to contact me through the GitHub repository.

Thank you for choosing TaskManagerApplication frontend! I hope you enjoy using our application to manage your tasks efficiently and organized.
