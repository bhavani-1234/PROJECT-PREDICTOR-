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
  apiKey: ""
})
// Start Conversation API
app.post('/api/start-conversation', async (req, res) => {
  const { description, messages, title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Missing required fields: conversationDescription, employeeData." });
  }

  // Create the prompt for OpenAI to suggest the best employees for the project or conversation context
  const prompt = `
    A new conversation is being initiated with the description: "${title}".
    The following employee data is provided to suggest the best fit for this conversation's needs.

    Employee Data:
    ${JSON.stringify(employeeData, null, 2)}

    Please suggest the best candidates who fit the context of this conversation, based on skills, experience, and certifications.
    Prioritize employees based on their past work, relevant expertise, and availability.
  `;

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

    // Optional: Enhance the response using more context
    const prompt2 = `
      Based on the response from the previous API, try to refine the suggestions further.
      API Data: 
      ${JSON.stringify(aiResponse.choices, null, 2)}

      Please suggest the best candidates for the conversation, prioritizing their expertise, experience, and availability.
    `;

    const aiResponse2 = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an AI project manager. Your task is to recommend the best candidates for a conversation based on their skills and past experience.`
        },
        {
          role: "user",
          content: prompt2
        }
      ],
      max_tokens: 2000
    });

    const enhancedSuggestion = aiResponse2.choices[0]?.message?.content.trim() || "No enhanced suggestion available.";

    // Respond back with the conversation suggestion
    res.json({
      message: "Conversation started successfully",
      conversationDetails: {
        title,
        aiSuggestion: enhancedSuggestion || suggestion  // Return the enhanced suggestion if available
      }
    });

  } catch (error) {
    console.error("Error processing start conversation:", error);
    res.status(500).json({ message: "Error starting the conversation." });
  }
});



// Start Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
