![App Screenshot](https://i.ibb.co/Z1XXvSdp/Next-Product-Hero.png)

# Product Viewing Website - (NextProduct)

NextProduct makes it easy for users to add products while allowing everyone to browse, view, and explore countless new items.

## Live Link

- Please Visit [NextProduct](https://nextproduct-sand.vercel.app/) !

## Features of NextProduct

- Public Landing Page with Navbar, Hero, Product Highlights, and Footer.
- Login with Google using NextAuth.js.
- Public Product List page showing all products.
- Product Details page with full product information.
- Protected Add Product page for authenticated users to add new products.

## npm packages

- Uses [Tailwind](https://tailwindcss.com/) for building custom user interfaces.
- Uses [daisyUI](https://daisyui.com/) for building web pages quickly and easily
- Uses [React](https://react.dev/) to build interactive, dynamic, and reusable user interfaces for web applications efficiently.
- Uses [NEXT.JS](https://nextjs.org/) to build server-rendered React applications with routing, API routes, and optimized performance.
- Uses [NextAuth.js](https://next-auth.js.org/) to add authentication in Next.js apps with social and credential-based logins.
- Uses [SweetAlert2](https://sweetalert2.github.io/) for creating beautiful, customizable, and responsive alert popups in web applications easily.
- Uses [MongoDB](https://www.mongodb.com/) for storing, querying, and managing large volumes of flexible, JSON-like data in web and mobile applications.
- Uses [Vercel](https://vercel.com/) for deploying, hosting, and scaling frontend web applications with speed, simplicity, and automation.

## Technologies Used

- ![React](https://img.shields.io/badge/React-v19.1.0-155dfc?logo=react&logoColor=%2361DAFB)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.1.11-155dfc?logo=tailwindcss)
- ![DaisyUI](https://img.shields.io/badge/DaisyUI-v5.0.50-155dfc?logo=daisyui&logoColor=%231AD1A5)
- ![MongoDB](https://img.shields.io/badge/MongoDB-v6.18.00-155dfc?logo=mongodb&logoColor=%2347A248)
- ![Next.js](https://img.shields.io/badge/Next.js-v15.05.00-155dfc?logo=nextdotjs&logoColor=%23ffffff)
- ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-v04.24.11-155dfc?logo=auth0&logoColor=%2337A5CC)

## 🛠️ Installation & Setup Instructions

Follow the steps below to set up the **NextProduct** application locally:

---

### 1. Clone the Repositories

```bash
git clone https://github.com/Arman3747/NextProduct.git

```

---

### 2. Setup

```bash
cd NextProduct
npm install
```

Create a `.env.local` file in the root of the client folder and add the following:

```env
##MongoDB_Credential
MONGODB_URI=mongodb_uri_with_userName_and_password

#Next.js_Credential
NEXT_PUBLIC_SERVER_ADDRESS=http://localhost:3000 or live_site_link
NEXTAUTH_SECRET=a_secret_key_or_a_long_text
NEXTAUTH_URL=http://localhost:3000 or live_site_link

#Google_Credential
GOOGLE_CLIENT_ID=google_client_id
GOOGLE_CLIENT_SECRET=google_client_secret
```

Then start the client:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## **Route Summary**

```md
# Route Summary

| Route                     | Method   | Description                                     |
| ------------------------- | -------- | ----------------------------------------------- |
| `/`                       | GET      | Homepage displaying products                    |
| `/login`                  | GET/POST | Login page using Google or credential login     |
| `/products`               | GET      | List all products                               |
| `/products/[id]`          | GET      | Show details of a single product                |
| `/dashboard`              | GET      | User dashboard (protected)                      |
| `/dashboard/addproduct`   | GET      | Add new product page (authenticated users only) |
| `/api/items`              | POST     | Add a new product to the database               |
| `/api/items`              | GET      | Fetch all products                              |
| `/api/auth/[...nextauth]` | GET/POST | NextAuth.js authentication routes               |
```

## Deployment

1. Push the code to GitHub.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Set environment variables in Vercel dashboard.
4. Deploy the site. Live URL will be generated automatically.

---

### Thank you for Reading!
