import {User} from '../models/auth';
// import jwt from 'jsonwebtoken'
export const signup= async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email đã được sử dụng" });
        }
        // Kiểm tra xem có người dùng nào trong hệ thống chưa
        const userCount = await User.countDocuments({});
        // Nếu không có người dùng nào, đặt vai trò là admin, ngược lại là customer
        const role = userCount === 0 ? "admin" : "customer";
        // Tạo người dùng mới
        const user = await User.create({ username, email, password, role });
        res.status(201).json({ message: "đăng kí succes" });
    } catch (error) {
        res.status(500).json({ error: "đăng kí fail" });
    }
};

export const login = async (req, res) => {
  try {
      const { email, password } = req.body;
      // Tìm người dùng theo email
      const user = await User.findOne({ email });
      // Nếu không tìm thấy người dùng, trả về lỗi
      if (!user) {
          return res.status(400).json({ message: "Email hoặc mật khẩu không đúng" });
      }
      // Kiểm tra mật khẩu
      const isMatch = await user.comparePassword(password);
      // Nếu mật khẩu không đúng, trả về lỗi
      if (!isMatch) {
          return res.status(400).json({ message: "Email hoặc mật khẩu không đúng" });
      }
      // Tạo token JWT
    //   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //       expiresIn: "1h",
    //   });

      // Trả về token và thông tin người dùng
      res.status(200).json({
        // token,
          user: { id: user._id, email: user.email, role: user.role },
      });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};