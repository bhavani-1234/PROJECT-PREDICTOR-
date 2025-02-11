const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');
const { employees} = require('./employees.js');
const app = express();
app.use(express.json());
app.use(cors());

const employeeData = employees;
//const projectsFile = 'projects.json';
const openai = new OpenAI({
  //apiKey: "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"
// Start Conversation API
});
const charts = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 700 },
    { name: "May", value: 600 },
    { name: "Jun", value: 800 },
  ];
  function findFirstKeyInSentence(keys, sentence) {
    // Convert the sentence to lowercase for case-insensitive matching
    sentence = sentence.toLowerCase();
    
    // Loop through the keys and return the first one that is found in the sentence
    for (let key of keys) {
        if (sentence.includes(key.toLowerCase())) {
            return key; // Return the first matching key
        }
    }
    
    return null;
}
const keys = ["bar chart","pie chart","line graph"];
app.post('/api/start-conversation', async (req, res) => {
  //const { description, messages, title } = req.body;

  const request = req.body[req.body.length-1];
  const chartType = findFirstKeyInSentence(keys, request.text);

  // Create the prompt for OpenAI to suggest the best employees for the project or conversation context
  const prompt = `
    Previous Conversation Details: ${JSON.stringify(req.body.slice(0,req.body.length-1))}
    Current Request :${JSON.stringify(request)}
    Employee Data:
    ${JSON.stringify(employeeData, null, 2)}
    Please suggest the best candidates who fit the context of this conversation, based on skills, experience, and certifications.
    Prioritize employees based on their past work, relevant expertise, and availability.
    Use Previous conversion details and employee data and fulfill the current request.If chart type not Null then give the employees data in array of objects where each object will have name of employee and value as number 
  `;
console.log(prompt);
  try {
    // Request AI response for employee suggestions based on the conversation context
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an AI project manager. Your task is to recommend the best candidates for a given conversation based on their skills, experience, and previous project contributions.`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 200
    });

    // Extract suggestion from the AI response
    const suggestion = aiResponse.choices[0]?.message?.content.trim() || "No suggestion available.";
console.log(suggestion);

    

   // const enhancedSuggestion = aiResponse2.choices[0]?.message?.content.trim() || "No enhanced suggestion available.";

    // Respond back with the conversation suggestion
  return res.json({suggestion});
  

  } catch (error) {
    console.error("Error processing start conversation:", error);
    res.status(500).json({ message: "Error starting the conversation." });
  }
});



// Start Server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
