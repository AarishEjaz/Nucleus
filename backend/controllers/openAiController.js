
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.summaryController = async(req,res) =>{

  try{
      const { prompt } = req.body;
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
      res.status(200).json({message: result.response.text()})
  }catch(error){
    console.log(error.message);
  }
}
