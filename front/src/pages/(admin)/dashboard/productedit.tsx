import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Product {
    name: string;
    price: number;
    description: string;
    isBuy: boolean;
    image: string;
  }
const Producteditpage=()=> {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const { data: product, isLoading } = useQuery({
      queryKey: ["product", id],
      queryFn: async () => {
        const response = await axios.get(`http://localhost:3000/products/`+id);
        return response.data;
      },
    });
    const [editedProduct, setEditedProduct] = useState<Product>({
      name: "",
      price: 0,
      description: "",
      isBuy: false,
      image: "",
    });
    useEffect(() => {
      if (product) {
        setEditedProduct(product);
      }
    }, [product]);
  
    const mutation = useMutation({
      mutationFn: async (updatedProduct: Product) => {
        await axios.put(`http://localhost:3000/products/${id}`, updatedProduct);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
        alert("cập nhật sản phẩm xong");
      },
      onError: () => {
        alert("kh cập nhật được sản phẩm");
      },
    });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      mutation.mutate(editedProduct);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditedProduct((prev) => ({
        ...prev,
        [name]: name === "price" ? parseFloat(value) : value, 
      }));
    };
    if (isLoading) {
      return <div>Loading...</div>; 
    }
  
    return (
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label className="form-label">Tên sản phẩm:</label>
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleChange}
            required className="form-control"
          />
        </div>
        <div>
          <label className="form-label">Giá sản phẩm:</label>
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
            required className="form-control"
          /> 
        </div>
        <div>
          <label className="form-label">Mô tả:</label>
          <input
            type="text"
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
            required className="form-control"
          />
        </div>
        <div>
          <label className="form-label">Trạng thái:</label>
          <input
            type="checkbox"
            name="isBuy"
            checked={editedProduct.isBuy}
            onChange={(e) => setEditedProduct((prev) => ({ ...prev, isBuy: e.target.checked }))} className="mt-2"
          />{" "}
          còn
        </div>
        <div>
          <label className="form-label">Hình ảnh (URL):</label>
          <input
            type="text"
            name="image"
            value={editedProduct.image}
            onChange={handleChange}
            required className="form-control"
          />
        </div><br/>
        <button type="submit" className="px-3 py-3 font-bold rounded-lg bg-yellow-400 border">sửa sản phẩm</button><br/>
        <Link to={`/admin/dashboard`}><button className='btn btn primary'>trở về</button></Link>
      </form>
    );
};
export default Producteditpage;
