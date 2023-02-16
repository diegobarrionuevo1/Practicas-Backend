import mongoose from "mongoose";
mongoose.set('strictQuery', false)
export const connectDB = async() =>{
    const connection  = await mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    console.log(`MongoDB conectada wachinn!: ${connection.connection.host}`)
}
