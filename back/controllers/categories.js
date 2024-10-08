import { Category } from "../models/categories";
export const getAllCategories = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    };
    const categories = await Category.paginate({}, options);
    res.status(201).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const addNewCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { _embed } = req.query;
    let query = Category.findById(id);
    if (_embed) {
      const embeds = _embed.split(",");
      embeds.forEach((embed) => {
        query = query.populate(embed);
      });
    }
    const category = await query.exec();
    if (!category) {
      return res.status(404).json({ message: "k tìm thấy category danh mục" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params; 
    const category = await Category.findByIdAndUpdate(id,req.body,{
      new: true, 
      runValidators: true,
    });
    if (!category) {
      return res.status(404).json({ message: "Không tìm thấy danh mục nao" }); 
    }
    res.status(200).json(category); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params; 
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "Không tìm thấy danh mục nào" }); 
    }
    res.status(200).json({ message: "Xóa sản phẩm thành công" }); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};
