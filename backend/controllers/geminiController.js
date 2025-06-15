
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const summaryController = async(req,res) =>{

  try{
      const { text } = req.body;
      const prompt = `summarize the text ${text}`
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
      res.status(200).json({message: result.response.text()})
  }catch(error){
    console.log(error.message);
  }
}

const javascriptController = async (req, res) => {
  try {
    const { text } = req.body;
    const prompt = `/* convert the instructions into javascript code and give only the well formatted code as output \n${text}`;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.status(200).json({ message: result.response.text() });
  } catch (error) {
    console.log(error.message);
  }
};

const brotherController = async (req, res) => {
  try {
    const { text } = req.body;
    const prompt = `/* response like an elder brother to the given text \n${text}`;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.status(200).json({ message: result.response.text() });
  } catch (error) {
    console.log(error.message);
  }
};




module.exports = {summaryController,javascriptController,brotherController}