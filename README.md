## Usage

To use example-sfmc-app in a production environment, follow the steps below:

1. Clone the repository:

   ```shell
   git clone https://github.com/invokecreate/example-sfmc-app.git
   ```

2. Install the dependencies:

   ```shell
   cd example-sfmc-app
   npm install
   ```

3. Configure the application by setting the required environment variables:
   - `appSecret`: The secret key used for session management in the application.
   - `clientId`: The client ID for your SFMC API integration.
   - `clientSecret`: The client secret for your SFMC API integration.
   - `redirectUri`: The redirect URI for the application.
   - `subdomain`: The SFMC subdomain for your account.

   You can set these environment variables in your hosting environment or use a tool like [dotenv](https://www.npmjs.com/package/dotenv) to load them from a file.

4. Start the application:

   ```shell
   npm start
   ```

5. Deploy the application to your production server or platform of choice. Make sure to set the appropriate environment variables in your production environment.

6. Access the application using the provided URL or the one associated with your production server.

   **Note:** Ensure that the application is accessible over HTTPS in a production environment, as SFMC requires secure connections for authentication.

7. Use the example-sfmc-app to authenticate with SFMC and retrieve email definitions using the SFMC REST API.

8. Customize the application as needed for your specific use case by modifying the code and views.

For additional information on configuring and customizing the application, refer to the [Configuration](#configuration) section.

## Configuration

The following environment variables are required for configuring the application:

- `appSecret`: The secret key used for session management in the application.
- `clientId`: The client ID for your SFMC API integration.
- `clientSecret`: The client secret for your SFMC API integration.
- `redirectUri`: The redirect URI for the application.
- `subdomain`: The SFMC subdomain for your account.

You can set these environment variables in your hosting environment or use a tool like [dotenv](https://www.npmjs.com/package/dotenv) to load them from a file.

## License

This project is licensed under the MIT License.
