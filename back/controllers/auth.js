import { Auth } from "../models/auth";
export const getAllUsers = async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
      };
      const authUser = await Auth.paginate({}, options);
      res.status(201).json(authUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  //ad
  export const addNewUser = async (req, res) => {
    try {
      // const { name, productAttributes } = req.body;
      // // Kiểm tra xem sản phẩm với tên này đã tồn tại chưa
      // const existingProduct = await Product.findOne({ name });
      // if (existingProduct) {
      //   return res
      //     .status(400)
      //     .json({ message: "Sản phẩm với tên này đã tồn tại" });
      // }
      // // Tìm các thuộc tính sản phẩm dựa trên danh sách ID
      // const attributes = await Attribute.find({
      //   _id: { $in: productAttributes },
      // });
      // // Kiểm tra xem tất cả các thuộc tính có tồn tại không
      // if (attributes.length !== productAttributes.length) {
      //   return res.status(400).json({ message: "Một hoặc nhiều thuộc tính không tìm thấy" });
      // }
  
      // Tạo sản phẩm mới với dữ liệu từ request body
      const authUser = await Auth.create(req.body);
      // Trả về phản hồi thành công với mã trạng thái 201 và dữ liệu sản phẩm mới
      res.status(201).json(authUser);
    } catch (error) {
      // Xử lý lỗi và trả về phản hồi lỗi với mã trạng thái 400
      res.status(400).json({ message: error.message });
    }
  };
  // id produc
  export const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const { _embed } = req.query;
      let query = Auth.findById(id);
      if (_embed) {
        const embeds = _embed.split(","); // Tách các trường cần populate thành mảng
        embeds.forEach((embed) => {
          query = query.populate(embed); // Thêm các trường cần populate vào query
        });
      }
  
      const auth = await query.exec(); // Thực thi query để lấy thông tin sản phẩm
      if (!auth) {
        return res.status(404).json({ message: "Không tìm thấy ng dung" }); // Trả về lỗi nếu không tìm thấy sản phẩm
      }
      res.status(200).json(auth); // Trả về thông tin sản phẩm nếu tìm thấy
    } catch (error) {
      res.status(500).json({ message: error.message }); // Xử lý lỗi và trả về phản hồi lỗi
    }
  };