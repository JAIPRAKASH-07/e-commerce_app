#🛍️ ShopHub — Basic E-Commerce App

## 📘 Objective

A simple **e-commerce web app** where users can browse products, view product details, and manage their cart. Built using **React (Function Components)**, **MobX**, and **Context API** with clean routing and responsive design.


## 🚀 Key Features

### 🏠 Home Page

* Product grid with name, price, and image.
* Dynamic category filters and sorting (URL-aware).
* Data fetched from [Fake Store API](https://fakestoreapi.com/).

### 📄 Product Details

* Dynamic route: `/product/:id/details`.
* Displays product title, price, and description.
* Add items to cart directly from this page.

### 🛒 Cart

* Adds items from detail page.
* Footer shows total value and item count.
* Item removal disabled (as per requirements).

### 🔗 Navigation

* React Router navigation between pages.
* “Back to Home” link from detail page.

---

## ⚙️ Tech Stack

| Area                  | Details                                     |
| --------------------- | ------------------------------------------- |
| **Framework**         | React (Class Components)                    |
| **Boilerplate**       | Create React App (CRA)                      |
| **Language**          | TypeScript (no JavaScript)                  |
| **Routing**           | React Router                                |
| **State Management**  | Context API + MobX                          |
| **API**               | [Fake Store API](https://fakestoreapi.com/) |
| **Data Fetching**     | `got` library                               |
| **Responsive Design** | Inline styling                              |
| **Testing**           | Cypress / Playwright                        |

---

## 🎯 Bonus

* 🧠 Cart persistence via `sessionStorage`.
* 🎞️ Smooth animations for transitions.



## 🧩 Project Structure


/src
 ├── components/
 ├── pages/
 ├── Tests/
 ├── context/
 ├── store/
 ├── api/
 ├── App.js
 └── index.js


## ⚡ Setup

# Clone
git clone https://github.com/JAIPRAKASH-07/e-commerce_app.git
cd shophub

# Install dependencies
npm install

# Run locally
npm start

# Run tests
npx cypress open
# or
npx playwright test

# Build for production
npm run build
```

---

## 🧑‍💻 Author

**Jaiprakash**
Project: *ShopHub — Modern E-Commerce Store*

