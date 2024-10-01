const products = [
    {
        id:1,
        name:"product 001",
        price:123132,
        description:"mo ta san pham produc",
        isBuy:true,
        image:"http://picsum.photos/100/200/200"
    },
    {
        id:2,
        name:"product 002",
        price:123132,
        description:"mo ta san pham produc",
        isBuy:true,
        image:"http://picsum.photos/101/200/200"
    },
    {
        id:3,
        name:"product 003 nice",
        price:3333,
        description:"mo ta san pham produc",
        isBuy:true,
        image:"http://picsum.photos/102/200/200"
    },
    {
        id:4,
        name:"product 04",
        price:444,
        description:"mo ta san pham produc",
        isBuy:false,
        image:"http://picsum.photos/103/200/200"
    },
    {
        id:5,
        name:"product 005 new ",
        price:9999,
        description:"mo ta san pham produc",
        isBuy:true,
        image:"http://picsum.photos/110/200/200"
    }
]
const getAllProducts=(req,res)=>{
    res.json(products);
}
export default getAllProducts;