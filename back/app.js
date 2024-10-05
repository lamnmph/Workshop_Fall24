import express from 'express';
import productRouter from './routers/products.js';
import cors from 'cors';
import morgan from "morgan";
import mongoose from 'mongoose';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import authRouter from './routers/auth.js';
const __filename = fileURLToPath(import.meta.url); // Lấy đường dẫn file hiện tại
const __dirname = path.dirname(__filename); // Lấy đường dẫn thư mục chứa file hiện tại

// Tự động thêm tất cả các router từ thư mục routes
const routesPath = path.join(__dirname, "routers"); // Đường dẫn tới thư mục routes
const loadRoutes = async () => {
    const files = fs.readdirSync(routesPath).filter((file) => file.endsWith(".js")); // Lấy tất cả các file .js trong thư mục routes
    const importPromises = files.map((file) =>
        import(/* @vite-ignore */ path.join(routesPath, file)).then((module) => {
            app.use("/api", module.default); // Thêm từng router vào ứng dụng
        })
    );
    await Promise.all(importPromises); // Đợi tất cả các router được thêm vào
};

loadRoutes().catch((error) => {
    console.error("Error loading routes:", error); // Xử lý lỗi nếu có
});
// 
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); // Ghi lại các yêu cầu HTTP
app.use('/api',productRouter);
app.use('/auth',authRouter);
mongoose.connect("mongodb://localhost:27017/Workshop");
export const viteNodeApp =app;
// đăng kí, nhập token,check quyền midleware
// category
// produc oce
