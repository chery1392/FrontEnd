1. کتابخانه های مورد نیاز را با دستور زیر نصب بنمایید
   ```bash
   npm install
   ```

2. ابتدا سرور خود را با دستور زیر ران کنید که در لوکال هاست 3000 اجرا میشود با توجه به فایل env داده شده در گیتهاب
   ```bash
   npm run server
   ```

3. سپس پروژه ریکت را ران کنید که در لوکال هاست 8000
   ```bash
   npm run dev
   ```

4. توجه شود برای ساخت اگهی و ادیت اگهی در فیلد هایی که ارقام قبول میکنند کیبورد به صورت انگلیسی باشد


## Project Overview
This is a comprehensive real estate platform designed to facilitate buying, selling, and renting properties. The application provides users with an intuitive interface for managing property listings and searching for homes based on various criteria.

## Features
- User authentication (sign up, login, logout)
- Add, edit, and delete property listings
- Search and filter properties based on location, price, and other parameters
- Interactive map integration for location selection
- User-friendly forms for property details
- Responsive design for mobile and desktop devices
- Toast notifications for user actions

## Technologies Used
- **Frontend:** React, TypeScript, Tailwind CSS, React Router
- **Backend:** JSON Server (for mock API)
- **State Management:** React Query
- **Map Integration:** Leaflet
- **Styling:** Tailwind CSS
- **Others:** React Hot Toast for notifications

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/seyedali-rafazi/FrontEnd.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   
## Usage
- **User Registration:** Go to the signup page and create a new account.
- **Adding a Property:** Once logged in, navigate to the 'Add Property' section and fill out the form.
- **Editing a Property:** Click on a property listing to view details, then click the 'Edit' button to update information.
- **Deleting a Property:** In the property details view, click the 'Delete' button to remove a listing.

## API Documentation
The project uses a mock API to manage data for property listings. The following endpoints are available:

- `GET /houses`: Retrieve all property listings.
- `POST /houses`: Create a new property listing.
- `PUT /houses/:id`: Update a specific property listing.
- `DELETE /houses/:id`: Delete a specific property listing.


- **Your Name**
- **Email:** seyedalirafazi80@gmail.com

---
