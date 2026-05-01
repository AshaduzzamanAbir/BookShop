import BookModel from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const book = await BookModel.find();
    res.status(200).json({ book });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
