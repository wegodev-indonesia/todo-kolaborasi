import mongoose from "mongoose";
import mongoosePaginate  from 'mongoose-paginate-v2';

const Schema = mongoose.Schema({
    task:{
        type: String,
    },
    description:{
        type: String,
    },
    createdAt:{
        type: Number
    },
    updatedAt:{
        type: Number
    }
},
{
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
})

Schema.plugin(mongoosePaginate);

export default mongoose.model('Task', Schema);