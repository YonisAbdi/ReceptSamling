# Recipe Collection Application

## Description

Welcome to the Recipe Collection Application - a digital sanctuary for all cooking lovers. Our platform serves the sole purpose of making cooking an easier and more enjoyable experience. Whether you're a seasoned chef or a beginner in the kitchen, our application offers a place for you to discover, save, and cherish the recipes you love.

This web application simplifies the process of finding and storing culinary recipes. Users can effortlessly search for recipes, manage their favorites, and access them anytime, making meal planning and preparation a breeze.

## Running the Application Locally

To get the application up and running on your local machine, follow these steps:

1. Clone the Repository
   Begin by cloning the repository to your preferred directory:
   git clone https://github.com/YonisAbdi/ReceptSamling.git

2. Navigate to the Project Directory
Change to the project directory in your terminal:
cd ReceptSamling

3. Install Dependencies
Install all necessary dependencies using npm:
npm install

4. Start the Application
Once the installation is complete, you can start the application:
npm run dev

Client-Side Data Storage
In our application, we've chosen specific client-side storage technologies for their reliability and ease of use:

Local Storage: We leverage localStorage for saving user settings and favorite recipes between sessions. This approach offers a simple and synchronous way to store small amounts of data without expiration.
IndexedDB: For a more robust and structured approach, we utilize IndexedDB to store larger amounts of recipe data. This asynchronous API provides a rich query capability and is ideal for applications that require offline data access.
The decision to use these technologies stems from our commitment to provide a seamless and efficient user experience without compromising on performance.

Challenges and Solutions
Throughout the development process, we encountered a few challenges:

Data Persistence: Initially, ensuring that user data persisted across sessions was a hurdle. We overcame this by implementing localStorage for lightweight data and IndexedDB for more complex data sets.
Search Functionality: Creating an effective search algorithm that could handle various filters was complex. We addressed this by using advanced query techniques and fine-tuning our database indexing.
Offline Access: Making the app usable without an internet connection was challenging. We integrated IndexedDB to enable full offline capabilities for our users.
Cross-Device Responsiveness: Ensuring a consistent experience across different devices was pivotal. We tackled this by adopting a mobile-first design approach and using responsive CSS frameworks.
By confronting these challenges head-on and through a process of trial and error, we have developed a robust and user-friendly application that meets the needs of our users.

We hope you enjoy using the Recipe Collection Application as much as we've enjoyed building it!
