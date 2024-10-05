import { Product } from "../models/products";
//all
export const getAllProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    };
    const products = await Product.paginate({}, options);
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//ad
export const addNewProducts = async (req, res) => {
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
    const product = await Product.create(req.body);
    // Trả về phản hồi thành công với mã trạng thái 201 và dữ liệu sản phẩm mới
    res.status(201).json(product);
  } catch (error) {
    // Xử lý lỗi và trả về phản hồi lỗi với mã trạng thái 400
    res.status(400).json({ message: error.message });
  }
};
// id produc
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { _embed } = req.query;
    let query = Product.findById(id);
    if (_embed) {
      const embeds = _embed.split(","); // Tách các trường cần populate thành mảng
      embeds.forEach((embed) => {
        query = query.populate(embed); // Thêm các trường cần populate vào query
      });
    }

    const product = await query.exec(); // Thực thi query để lấy thông tin sản phẩm
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" }); // Trả về lỗi nếu không tìm thấy sản phẩm
    }
    res.status(200).json(product); // Trả về thông tin sản phẩm nếu tìm thấy
  } catch (error) {
    res.status(500).json({ message: error.message }); // Xử lý lỗi và trả về phản hồi lỗi
  }
};
//up
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Lấy ID sản phẩm từ URL params
        const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true, // Trả về sản phẩm mới sau khi cập nhật
            runValidators: true, // Chạy các validator đã định nghĩa trong schema
        });
        if (!product) {
            return res.status(404).json({ message: "Không tìm thấy sản phẩm nào" }); // Trả về lỗi nếu không tìm thấy sản phẩm
        }
        res.status(200).json(product); // Trả về thông tin sản phẩm sau khi cập nhật
    } catch (error) {
        res.status(400).json({ message: error.message }); // Xử lý lỗi và trả về phản hồi lỗi
    }
};
// dele
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // Lấy ID sản phẩm từ URL params
        const product = await Product.findByIdAndDelete(id); // Tìm và xóa sản phẩm theo ID
        if (!product) {
            return res.status(404).json({ message: "Không tìm thấy sản phẩm nào" }); // Trả về lỗi nếu không tìm thấy sản phẩm
        }
        res.status(200).json({ message: "Xóa sản phẩm thành công" }); // Trả về phản hồi thành công sau khi xóa
    } catch (error) {
        res.status(500).json({ message: error.message }); // Xử lý lỗi và trả về phản hồi lỗi
    }
};