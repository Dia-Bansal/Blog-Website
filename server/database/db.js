import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-2i5vouk-shard-00-00.ciz1c0v.mongodb.net:27017,ac-2i5vouk-shard-00-01.ciz1c0v.mongodb.net:27017,ac-2i5vouk-shard-00-02.ciz1c0v.mongodb.net:27017/?ssl=true&replicaSet=atlas-bfvwjf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;