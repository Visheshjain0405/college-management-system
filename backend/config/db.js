const mongoose=require('mongoose')
const MONGOURL='mongodb+srv://visheshj865:Vishesh6609@cluster0.bw0bufi.mongodb.net/Byte_University?retryWrites=true&w=majority&appName=Cluster0';

const connectDB=async()=>{
    try {
        await mongoose.connect(MONGOURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports=connectDB;