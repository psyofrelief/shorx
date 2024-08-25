# ShorX

![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Inertia.js](https://img.shields.io/badge/Inertia.js-35495E?style=for-the-badge&logo=inertiajs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Explore the live demo at [ShorX](https://www.shrx.me)

### Demo login details:

-   Email: guest@shrx.com
-   Password: Shorx1234

## About ShorX

ShorX is a powerful link shortening service that lets users quickly shorten URLs and create QR codes for simple sharing & tracking. ShorX is pronounced as "Shor Ten," with X standing for the Roman numeral for ten. ShorX is a modern frontend with server-side backend capabilities built with Laravel, React, and Inertia.js.

## Features

-   **URL Shortening**: Transform lengthy URLs into digestible, brief links.
-   **QR Code Generation**: Create QR codes for any shortened URL automatically.
-   **Link Management**: In addition to tracking click statistics and managing their created links, users can edit or remove links as needed.
-   **User Authentication**: Secure user registration and login functionality.
-   **Responsive Design**: Completely adaptable interface ideal for use on both desktop and mobile devices.

## Technologies Used

-   **Laravel**: PHP framework providing a robust backend structure.
-   **React**: A JavaScript library for building user interfaces.
-   **Inertia.js**: A library to create a single-page experience using classic server-side routing and controllers.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Installation

To set up ShorX locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/psyofrelief/shorx.git
    ```
2. Navigate to the project directory:
    ```bash
    cd shorx
    ```
3. Install PHP and JavaScript dependencies:
    ```bash
    composer install
    npm install
    ```
4. Copy the `.env.example` file to `.env` and configure your environment:
    ```bash
    cp .env.example .env
    ```
5. Generate an application key:
    ```bash
    php artisan key:generate
    ```
6. Run database migrations:
    ```bash
    php artisan migrate
    ```
7. Start the development server:
    ```bash
    php artisan serve
    ```
8. In a new terminal, start the frontend development server:
    ```bash
    npm run dev
    ```
9. Open `http://localhost:8000` in your browser to view the app.

## Usage

-   **Shorten a Link**: To create a shortened link, just enter the URL and, optionally, a custom code.
-   **Manage Links**: To view, modify, or remove your shortened links, you can access the dashboard.
-   **QR Code**: Every link instantly creates a QR code that can be added to websites or downloaded. No need to do anything on your end.

## Preview Images

### Home Page

![Home Page Preview](https://imgur.com/mMTncUV.jpg)

### Login Page

![Login Preview](https://imgur.com/exIS5kl.jpg)

### Links Dashboard

![Links Dashboard Preview](https://imgur.com/yG5h6Yk.png)

### Create Link Page

![Create Link Page Preview](https://imgur.com/ULftbvV.png)

## Credits

This project was developed by Faried Idris, leveraging modern web technologies to create an efficient link management solution.

## License

ShorX is open-sourced software licensed under the [MIT License](LICENSE).
