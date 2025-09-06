<img width="1862" height="856" alt="Screenshot 2025-09-06 165923" src="https://github.com/user-attachments/assets/9de265d4-c553-4ccd-ad7f-e66f6969f4eb" /># Wanderlust

Wanderlust is a full-stack Node.js web application that allows users to view, create, edit, and delete travel listings. The app is designed to provide a clean, responsive, and Airbnb-style interface using EJS templates.

## Features

- View all travel listings in a professional grid layout.
- Add new listings with title, image, description, price, location, and country.
- Edit and update existing listings.
- Delete listings.
- Detailed individual listing pages.
- Responsive design with hover animations for a modern feel.


## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Frontend:** EJS, HTML, CSS
- **Utilities:** method-override, dotenv
- **Database:** MongoDB (local or cloud)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/bablookumarmuz/wanderlust.git


```

2. Navigate to the project folder:

cd wanderlust

3. Install dependencies:

npm install

4. Start the application:
 
node app.js

5. Open your browser and go to:

http://localhost:8080/listings


Folder Structure
wanderlust/
│
├── app.js                 # Main application file
├── models/
│   └── listing.js         # Mongoose schema for listings
├── views/
│   ├── listings/
│   │   ├── index.ejs      # All listings page
│   │   ├── new.ejs        # Add new listing page
│   │   ├── show.ejs       # Single listing page
│   │   └── edit.ejs       # Edit listing page
├── public/                # CSS, images, JS files (if any)
├── package.json           # Project dependencies
├── .gitignore             # Files to ignore in git
└── README.md              # Project documentation


Usage

View Listings: Go to /listings to see all available travel listings.

Add Listing: Go to /listings/new to add a new listing.

Edit Listing: Click "Edit" on a listing to update it.

Delete Listing: Click "Delete" on a listing to remove it.

Notes

Make sure MongoDB is running locally or update the MONGO_URL in app.js to use a cloud MongoDB connection.

Images can be provided via a URL; if left blank, a default placeholder image will be used.



License

This project is licensed under the MIT License.


You can now copy all of this and paste it into your `README.md` file.  

If you want, I can also **add instructions on how to deploy this project online** so anyone can access it via a URL. Do you want me to do that?

