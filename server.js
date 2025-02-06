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
  apiKey: "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"
})
// Create Project API
app.post('/api/create-project', async(req, res) => {
  const { projectName, requiredSkills, optionalSkills, numResources, description } = req.body;

 

  const prompt = `
    A new project named "${projectName}" is being created.
    Required technical skills: ${requiredSkills.join(", ")}.
    Optional skills: ${optionalSkills.length > 0 ? optionalSkills.join(", ") : "None"}.
    Number of employees needed: ${numResources}.
    Description: ${description || "No description provided"}.

    Based on the following employee data, suggest the best candidates for this project:
    incase the employee data is not fulfilling the required skills then suggest the next best candidates based on the employee experience in employee data  try to figure out which areas they got expertise in based on the text and give the nearest best in the domain  but number of employees provided must be fulfilled from you  
    Employee Data: 
    ${JSON.stringify(employeeData, null, 2)}

    Please return a list of employees who match the required skills and any optional skills if available. 
    Prioritize candidates based on experience, relevant projects, and certifications.
    Also, suggest the best possible team composition and any additional recommendations for this project.
`;

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
       messages : [
        {
          role: "system",
          content: `You are an expert project manager specializing in resource allocation. 
                    Your task is to recommend the best employees for a given project 
                    based on skills, experience, and past project contributions.`
        },
        {
          role: "user",
          content: prompt
        }
      ]   
,      
      max_tokens: 2000
    });


    const suggestion = aiResponse.choices[0]?.message?.content.trim() || "No suggestion available.";
    console.log(aiResponse.choices);
    const prompt2 = `
   based on the response coming from Api Data try to enhance the model better  
    Api1 Data: 
    ${JSON.stringify(aiResponse.choices, null, 2)}

    Please return a list of employees who match the required skills and any optional skills if available. 
    Prioritize candidates based on experience, relevant projects, and certifications.
    Also, suggest the best possible team composition and any additional recommendations for this project.
`;
    const aiResponse2 = await openai.chat.completions.create({
      model: "gpt-4o-mini",
       messages : [
        {
          role: "system",
          content: `You are an expert project manager specializing in resource allocation. 
                    Your task is to recommend the best employees for a given project 
                    based on skills, experience, and past project contributions.`
        },
        {
          role: "user",
          content: prompt2
        }
      ]   
,      
      max_tokens: 2000
    });
    console.log(aiResponse2.choices);
    
    
    res.json({
      message: "Project successfully created",
      projectDetails: {
        projectName,
        requiredSkills,
        optionalSkills,
        numResources,
        description,
        aiSuggestion: suggestion
      }
    });
});


// Start Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
