import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    const stringConnection: string = process.env.MONGO_DB || '';
    await mongoose.connect(stringConnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Db online...');
  } catch (error) {
    console.log('Error->: ', error);
  }
};
