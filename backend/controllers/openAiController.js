import OpenAI from "openai";
const dotenv = require('dotenv')
dotenv.config()
const openai = new OpenAI();
const{Configuration, OpenAIApi} = require("openai")
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

exports.summaryController = async(req,res) =>{
    try{
        const {text} = req.body
        const { data } = await openai.completions.create({
          model: "gpt-3.5-turbo-instruct",
          prompt: `Summarise this ${text}`,
          max_tokens: 500,
          temperature: 0,
        });

        if(data){
            if(data.choices[0].text){
                return res.status(200).json(data.choices[0].text)
            }
        }
    }catch(err){
        console.log(err)
        return res.status(404).json({
            message:err.message
        })
    }
}



async function main() {
  const completion = await openai.completions.create({

  });

  console.log(completion);
}
