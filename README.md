<img width="1400" alt="Descope tRPC Banner" src="./trpc_sample_app_banner.png">


# tRPC + Descope Next.js Sample App

This app showcases the power of using tRPC for your API needs and Descope for secure authentication. This is great for Next.js developers who want to quickly create typesafe APIs with advanced auth methods. :zap:

## Features :sparkles:

- **Secure Authentication**: Utilizes Descope for user authentication.
- **Typesafe APIs**: Leverages tRPC to create endpoints that can be used in both the front and backend of your app.
- **Flexible Procedures**: Easy to add or modify API procedures with tRPC.

## Getting Started 🚀

Follow these steps to clone the repository and start using the app.

### Prerequisites

- An account on [Descope](https://descope.com/).

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/descope-sample-apps/trpc-nextjs-sample-app.git
cd trpc-nextjs-sample-app
```

### Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm i
npm install @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query@latest zod
npm install @descope/nextjs-sdk
```

### Configuration

Before you run the app, make sure to configure the following:

- **Environment Variables**: Set up your environment variables in a `.env.local` file. You'll need to include your Descope project settings:

```
####### Descope ENV Variables
NEXT_PUBLIC_DESCOPE_PROJECT_ID="" // Descope Project ID
NEXT_PUBLIC_DESCOPE_FLOW_ID="sign-up-or-in" // Descope flow to use on Sign In Page

# Optional - Descope Base Url, either https://api.descope.com, https://api.sandbox.descope.com or http://localhost:8000
NEXT_PUBLIC_DESCOPE_BASE_URL=""
```

### Running the App

Once you've configured your app, you're ready to run it:

```bash
npm run dev
# or
yarn dev
```

This command starts the Next.js development server, making your app accessible at [http://localhost:3000](http://localhost:3000).

## Support :raised_hands:

If you encounter any issues or have questions, consult the tRPC and Descope documentation, or reach out to our [support](https://www.descope.com/contact) for assistance.

- [tRPC Documentation](https://trpc.io/docs/)
- [Descope Documentation](https://docs.descope.com/)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or improvements.

## License

This sample app is open-source and available under the MIT License. See the LICENSE file for more details.
