# SendGrid Mailer Example

This is a small web application that utilizes the SendGrid API for sending emails. It provides a simple interface to compose and send emails using the powerful email delivery capabilities of SendGrid.

## Features

- **Email Composition**: Users can compose emails by providing the recipient's email address, subject, and the email content.
- **Send Email**: The application uses the SendGrid API to send the composed email to the recipient's address.
- **Error Handling**: Proper error handling is implemented to provide feedback in case of any failures during email sending.

## Prerequisites

Before running the application, ensure that you have the following:

- **SendGrid API Key**: Obtain an API key from SendGrid (https://sendgrid.com) by creating an account or logging in to your existing account.
- **Node.js**: Install Node.js (https://nodejs.org) on your system to run the application.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VinzeG2/MailerExample.git
   
   
2. Navigate to the project directory:

   ```bash
   cd MailerExample
   
3. Install the dependencies:

   ```bash
   npm install
   
4. Create a .env file in the root directory of the project and add the following environment variables:

   ```bash
   SENDGRID_API_KEY=your-sendgrid-api-key
   FROM=your-configured-email
   
  Replace your-sendgrid-api-key with the API key you obtained from SendGrid, and your-configured-email with the email address you have configured to send emails from.
