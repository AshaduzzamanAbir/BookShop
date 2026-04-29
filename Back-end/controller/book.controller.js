import BookModel from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const book = await BookModel.find();
    res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      book,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
