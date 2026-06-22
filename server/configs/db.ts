import mongoose from 'mongoose'


const connectDB = async ()=>{
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        throw new Error('MONGODB_URI is required');
    }

    try {
        mongoose.connection.on('connected', ()=>console.log('MongoDB connected'))
        await mongoose.connect(mongoUri)
    } catch (error) {
        console.error('Error connecting to MongoDB:' , error)
        throw error;
    }
}

export default connectDB;
