import { connect } from "mongoose";

export const connentToMongo = async () => {
    try {
      await connect('mongodb://localhost/terorism')
      console.log('[database] mongo successfully connected')
      }
     catch (err) {
      console.error(err);
    }
  };
  