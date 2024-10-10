import { Skeleton, Space, Table } from "antd";
import type { TableProps } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
interface DataType {
  id:number,
  name: string;
  price: number;
  quantity:number,
  description: string;
  image: string;
  status:boolean;
}
const DashboardAdminpage = () => {
  const{data,isLoading}=useQuery({
    queryKey:['products'],
    queryFn:async()=>{
      const response=await fetch(`http://localhost:3000/products`);
      const data=await response.json();
      return data.map((products:any)=>({
        id:products.id,
        ...products,
      }))
    }
  })
  const handleDelete=async(id:number)=>{
    try{
      if(window.confirm('xóa sản phẩm này??')){
        await axios.delete(`http://localhost:3000/products/`+id);
        window.alert('xong xóa');
      }
    }catch(err){console.log(err);
    }
  }
  const columns:TableProps<DataType>['columns']=[
    {
      title:"tên sản phẩm",
      dataIndex:"name",
      key:"name",
      render:(name)=><div style={{color:"green"}} className="font-bold">{name}</div>
    },
    {
      title:"giá sản phẩm",
      dataIndex:"price",
      key:"price",
    },
    {
      title:"số lượng sản phẩm",
      dataIndex:"quantity",
      key:"quantity",
    },
    {
      title:"mô tả sp",
      dataIndex:"description",
      key:"description",
    },
    {
      title:"tình trạng",
      dataIndex:"status",
      key:"status",
      render:(status)=><div className="font-bold text-red-500">{status?'hết r':'còn'}</div>
    },
    {
      title:"ảnh sản phẩm",
      dataIndex:"image",
      key:"image",
      render:(image)=>{return(
        
        <img src={image} alt="err img" width={50} height={50}/>

      )}
    },
    {
      title: "Tính năng",
      key: "Tính năng",
      render:(_,record) => (
        <Space size={"large"}>
          <Link to={`product/edit/${record.id}`}><button className="font-bold border bg-yellow-300 px-2 py-2 rounded-lg">Sửa Sản Phẩm</button></Link>
          <button className="font-bold border bg-red-400 px-2 py-2 rounded-lg" onClick={()=>handleDelete(record.id)}>Xóa Sản Phẩm</button>
        </Space>
      ),
    },
];
  return (
    <>
     <Skeleton loading={isLoading} active>
      <Table dataSource={data} columns={columns}/>
     </Skeleton>
    </>
  );
};
export default DashboardAdminpage;
