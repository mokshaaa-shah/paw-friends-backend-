import mongoose from 'mongoose'

export function connectDB() {
  const uri =
    "mongodb+srv://moksha1:moksha1@cluster0.l1hryxa.mongodb.net/?retryWrites=true&w=majority";
  console.log("Hiii");
  return mongoose
    .connect(uri)
    .then(() => console.log("mongoDB connected..."))
    .catch((error) => {
      console.log("ERROR Conecting database");
    });
}

// PROMISES >> Asynchronous codes


