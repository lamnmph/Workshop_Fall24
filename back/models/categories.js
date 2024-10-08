import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import slugify from "slugify";

const CategorySchema=mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:true,
    },
},{timestamps:true,versionKey:false})
CategorySchema.pre("save", function (next) {
    if (this.isModified("name")) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});
CategorySchema.plugin(mongoosePaginate);
export const Category=mongoose.model('Category',CategorySchema);