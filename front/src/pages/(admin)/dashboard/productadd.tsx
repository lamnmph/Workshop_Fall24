import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { useState } from "react";
interface NewProduct {
    name: string;
    price: number;
    description: string;
    isBuy: boolean;
    image: string;
  }
const Productaddpage = () => {
    const [newProduct, setNewProduct] = useState<NewProduct>({
        name: "",
        price: 0,
        description: "",
        isBuy: false,
        image: "",
      });
      const queryClient=useQueryClient();
      const mutation = useMutation({
        mutationFn: async (product: NewProduct) => {
          const response = await axios.post("http://localhost:3000/products", product);
          return response.data;
        },
        onSuccess: () => {
          queryClient.invalidateQueries(["products"]);
          alert("thêm sản phẩm xong");
        },
        onError: () => {
          alert("không thêm được sp");
        },
      });
      const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(newProduct);
      };
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({
          ...prev,
          [name]: name === "price" ? parseFloat(value) : value,
        }));
      };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Tên sản phẩm:</label>
            <input type="text" name="name" value={newProduct.name} onChange={handleChange} required placeholder="nhập tên sp"
            />
          </div>
          <div>
            <label>Giá sản phẩm:</label>
            <input type="number" name="price" value={newProduct.price} onChange={handleChange} required placeholder="nhập giá sp"
            />
          </div>
          <div>
            <label>Mô tả:</label>
            <input type="text" name="description" value={newProduct.description} onChange={handleChange} required placeholder="nhập mô tả sp"
            />
          </div>
          <div>
            <label>Trạng thái:</label>
            <input type="checkbox" name="isBuy" checked={newProduct.isBuy}
              onChange={(e) => setNewProduct((prev) => ({ ...prev, isBuy: e.target.checked }))}
            />{" "}
            Còn hàng
          </div>
          <div>
            <label>Hình ảnh (URL):</label>
            <input type="text" name="image" value={newProduct.image} onChange={handleChange} required placeholder="nhập hình ảnh sp"
            />
          </div><br/>
          <button type="submit" className="font-bold border px-3 py-3">Thêm sản phẩm</button>
        </form>
      );
};
export default Productaddpage;
