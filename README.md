# Next TRCP Descope Example

## Getting Started

1. Copy the `.env.local.example` to `.env.local` with the following variables:

```env
# Your Project ID
NEXT_PUBLIC_DESCOPE_PROJECT_ID=<project-id>
# Flow Id to run, e.g. sign-up-or-in
NEXT_PUBLIC_DESCOPE_FLOW_ID=<flow-id>
# Optional - Descope Base Url, either https://api.descope.com, https://api.sandbox.descope.com or http://localhost:8000
NEXT_PUBLIC_DESCOPE_BASE_URL=<base-url>
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Content

This app contains 2 components:

### Home Page

a. When user is not logged-in:

- "Login" button (navigate to "Login page")
- "Not Validated" user data that returned from server side props

b. When user is logged-in

- The logged in user name (or id)
- "Logout" button
- "Submit" form, to demonstrate trpc (form) usage
- "Validated" user data that returned from server side props


### Login Page

- Shows login flow (Descope component)
