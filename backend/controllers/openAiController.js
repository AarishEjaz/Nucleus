

// const OpenAI = require("openai");
// require("dotenv").config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// exports.summaryController = async(req,res) =>{
//     try{
//         const {text} = req.body
//         const { data } = await openai.completions.create({
//           model: "gpt-3.5-turbo-instruct",
//           prompt: `Summarise this ${text}`,
//           max_tokens: 500,
//           temperature: 0,
//         });

//         if(data){
//             if(data.choices[0].text){
//                 return res.status(200).json(data.choices[0].text)
//             }
//         }
//     }catch(err){
//         console.log(err)
//         return res.status(404).json({
//             message:err.message
//         })
//     }
// }



// async function main() {
//   const completion = await openai.completions.create({

//   });

//   console.log(completion);
// }

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
