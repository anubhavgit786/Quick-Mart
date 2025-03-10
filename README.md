---

## **🌍 Next.js Multi-Language & Currency App**  

This is a **multi-language e-commerce application** built using **Next.js**, **TypeScript**, and **i18next** for internationalization. The app allows users to switch between different languages and currencies seamlessly.  

## 🚀 **Features**  

✅ **Multi-language support** (i18next with Next.js)  
✅ **Currency Formatter** (Dynamic currency conversion)  
✅ **Product Carousel** (Using `react-slick`)  
✅ **Dark/Light Mode** (Theme toggle)  
✅ **Netlify Deployment**  

---

## 🛠️ **Tech Stack**  

- **Frontend**: Next.js, TypeScript, React  
- **Styling**: Tailwind CSS  
- **Internationalization**: `next-i18next`  
- **Carousel**: `react-slick`  
- **Icons**: `react-icons`  
- **API Calls**: Axios  

---

## 🔧 **Installation**  

### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/anubhavgit786/Quick-Mart.git
cd Quick-Mart
```

### 2️⃣ **Install Dependencies**  
```sh
npm install
```

### 3️⃣ **Run the Project Locally**  
```sh
npm run dev
```
Open **http://localhost:3000** in your browser.

---

## 🌐 **Deployment on Netlify**  

1. **Push your code to GitHub**  
2. **Connect GitHub repo to Netlify**  
3. **Add the following build settings in `netlify.toml`**  

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

4. **Ensure that `public/locales` is included in Git**  
   ```sh
   git add public/locales
   git commit -m "Ensure translation files are included"
   git push origin main
   ```
5. **Trigger a new build on Netlify**  

---


---

## 🛠️ **Common Issues & Fixes**  

### **1️⃣ `Could not find a declaration file for module 'react-slick'`**
```sh
npm install --save-dev @types/react-slick
```


---

## 📌 **Contributing**  

🙌 **Feel free to contribute!**  
- Fork the repo  
- Create a new branch  
- Open a PR with your changes  

---

## 📜 **License**  
This project is **open-source** under the **MIT License**.  

---
