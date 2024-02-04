Amazon Product Tracker
This is a web application that allows you to track the price of any Amazon product. You can enter the product link in the search bar and see the product details, such as name, image, rating, and current price. You can also enable price tracking, which will use a cron job to periodically scrape the product data and send you an email notification when the price reaches the lowest point ever. This way, you can buy the product at the best possible price.

Technologies
This project is built with the following technologies:

Next.js 14: A React framework for building fast and scalable web applications.
TypeScript: A superset of JavaScript that adds static type checking and other features.
Tailwind: A utility-first CSS framework for rapidly building custom designs.
MongoDB: A document-based database for storing and querying data.
How to run
To run this project locally, you need to have Node.js, npm, and MongoDB installed on your machine. Then, follow these steps:

Clone this repository to your local machine.
Navigate to the project folder and run npm install to install the dependencies.
Create a .env file in the root directory and add the following variables:
MONGODB_URI=<your MongoDB connection string>
SENDGRID_API_KEY=<your SendGrid API key>
EMAIL_FROM=<your email address>
EMAIL_TO=<the email address to receive notifications>

Run npm run dev to start the development server.
Open http://localhost:3000 in your browser and enjoy!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
