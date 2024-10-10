import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
interface NewProduct {
    name: string;
    price: number;
    description: string;
    status: boolean;
    image: string;
    quantity:number,
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
        <form onSubmit={handleSubmit} className='form-group'>
          <div>
            <label className='form-label'>Tên sản phẩm:</label>
            <input type="text" name="name" value={newProduct.name} onChange={handleChange} required placeholder="nhập tên sp" className='form-control'
            />
          </div>
          <div>
            <label  className='form-label'>Giá sản phẩm:</label>
            <input type="number" name="price" value={newProduct.price} onChange={handleChange} required placeholder="nhập giá sp" className='form-control'
            />
          </div>
          <div>
            <label  className='form-label'>Số lượng sản phẩm:</label>
            <input type="number" name="quantity" value={newProduct.quantity} onChange={handleChange} required placeholder="nhập số lượng sp" className='form-control'
            />
          </div>
          <div>
            <label className='form-label' >Mô tả:</label>
            <input type="text" name="description" value={newProduct.description} onChange={handleChange} required placeholder="nhập mô tả sp" className='form-control'
            />
          </div>
          <div>
            <label className='form-label'>Trạng thái:</label>
            <input type="checkbox" name="status" checked={newProduct.status}
              onChange={(e) => setNewProduct((prev) => ({ ...prev, status: e.target.checked }))}
            />{" "}
            còn
          </div>
          <div>
            <label className='form-label'>Hình ảnh (URL):</label>
            <input type="text" name="image" value={newProduct.image} onChange={handleChange} required placeholder="nhập hình ảnh sp" className='form-control'
            />
          </div><br/>
          <button type="submit" className="font-bold border px-3 py-3 rounded-lg bg-yellow-400">Thêm sản phẩm</button> <br/>
          <Link to={`/admin/dashboard`}><button className='btn btn primary'>trở về</button></Link>
        </form>
      );
};
export default Productaddpage;
