const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");
const { employees } = require("./employees.js");
const e = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const employeeData = employees;
//const projectsFile = 'projects.json';
const openai = new OpenAI({
  apiKey:
    "",
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

const chartTypes = ["bar chart", "pie chart", "line graph"];

function findFirstKeyInSentence(keys, sentence) {
  // Convert the sentence to lowercase for case-insensitive matching
  sentence = sentence.toLowerCase();

  // Loop through the keys and return the first one that is found in the sentence
  for (let key of chartTypes) {
    if (sentence.toLowerCase().includes(key)) {
      return key; // Return the first matching key
    }
  }

  return null;
}
app.post("/api/start-conversation", async (req, res) => {
  //const { description, messages, title } = req.body;
  return res.json({ suggestion: JSON.stringify({
    "status": "success",
    "message": "The request has been successfully fulfilled.",
    "data": {
      "chart_type": "pie chart",
      "chart_data": [
        {
          "skill": "Java",
          "number_of_employees": 1
        },
        {
          "skill": "Spring Boot",
          "number_of_employees": 1
        },
        {
          "skill": "MySQL",
          "number_of_employees": 1
        },
        {
          "skill": "RESTful APIs",
          "number_of_employees": 1
        },
        {
          "skill": "Agile Development",
          "number_of_employees": 1
        },
        {
          "skill": "Python",
          "number_of_employees": 3
        },
        {
          "skill": "Django",
          "number_of_employees": 1
        },
        {
          "skill": "PostgreSQL",
          "number_of_employees": 1
        },
        {
          "skill": "API Development",
          "number_of_employees": 1
        },
        {
          "skill": "Cloud Computing",
          "number_of_employees": 2
        },
        {
          "skill": "Project Management",
          "number_of_employees": 1
        },
        {
          "skill": "Agile Methodology",
          "number_of_employees": 1
        },
        {
          "skill": "Client Relations",
          "number_of_employees": 1
        },
        {
          "skill": "Team Leadership",
          "number_of_employees": 1
        },
        {
          "skill": "Risk Management",
          "number_of_employees": 1
        },
        {
          "skill": "Machine Learning",
          "number_of_employees": 2
        },
        {
          "skill": "TensorFlow",
          "number_of_employees": 2
        },
        {
          "skill": "Data Visualization",
          "number_of_employees": 2
        },
        {
          "skill": "SQL",
          "number_of_employees": 2
        },
        {
          "skill": "AWS",
          "number_of_employees": 3
        },
        {
          "skill": "Docker",
          "number_of_employees": 2
        },
        {
          "skill": "Kubernetes",
          "number_of_employees": 2
        },
        {
          "skill": "CI/CD",
          "number_of_employees": 2
        },
        {
          "skill": "Terraform",
          "number_of_employees": 3
        },
        {
          "skill": "Figma",
          "number_of_employees": 2
        },
        {
          "skill": "Adobe XD",
          "number_of_employees": 2
        },
        {
          "skill": "User Research",
          "number_of_employees": 2
        },
        {
          "skill": "Prototyping",
          "number_of_employees": 1
        },
        {
          "skill": "Design Systems",
          "number_of_employees": 1
        },
        {
          "skill": "JavaScript",
          "number_of_employees": 1
        },
        {
          "skill": "React",
          "number_of_employees": 2
        },
        {
          "skill": "Node.js",
          "number_of_employees": 2
        },
        {
          "skill": "MongoDB",
          "number_of_employees": 2
        },
        {
          "skill": "GraphQL",
          "number_of_employees": 1
        },
        {
          "skill": "Network Security",
          "number_of_employees": 1
        },
        {
          "skill": "Penetration Testing",
          "number_of_employees": 1
        },
        {
          "skill": "SIEM",
          "number_of_employees": 1
        },
        {
          "skill": "Ethical Hacking",
          "number_of_employees": 1
        },
        {
          "skill": "Azure",
          "number_of_employees": 1
        },
        {
          "skill": "Google Cloud",
          "number_of_employees": 1
        },
        {
          "skill": "Microservices",
          "number_of_employees": 1
        }
      ]
    }
  }) });

  const request = req.body[req.body.length - 1];
  const chartType = findFirstKeyInSentence(chartTypes, request.text);
  let exampleResponseformat;

  if (chartType) {
    exampleResponseformat = `
    You are an AI project manager. Your task is to use previous conversation details and employee data to fulfill the current request. Please ensure that your response is in **valid JSON format** only, with no extra characters, backticks , or additional text. The JSON should be clean and well-structured. 

    Your response should follow this format exactly, and should not include any extra words or formatting outside of the JSON object:
        
    Example response format:
    {
      "status": "success",
      "message": "The request has been successfully fulfilled.",
      "data": {
        "chart_type": "${chartType}",
        "chart_data": [
          {
            "name": "Jan",
            "value": 400
          },
          {
            "name": "Feb",
            "value": 300
          },
          {
            "name": "Mar",
            "value": 500
          },
          {
            "name": "Apr",
            "value": 700
          },
          {
            "name": "May",
            "value": 600
          },
          {
            "name": "Jun",
            "value": 800
          }
        ]
      }
    }

Always return just the **JSON object**, and do not include any other text like backticks, extra keys, or formatting outside the JSON response.
    `;
  } else {
    exampleResponseformat = `
             You are an AI project manager. Your task is to use previous conversation details and employee data to fulfill the current request. Please ensure that your response is in **valid JSON format** only, with no extra characters, backticks, or additional text. The JSON should be clean and well-structured. 

            Your response should follow this format exactly, and should not include any extra words or formatting outside of the JSON object:
        
            Example response format:
            {
              "status": "success",
              "message": "The request has been successfully fulfilled.",
              "data": {
                "employees_with_experience_over_7_years": 7,
                "employee_details": [
                  {
                    "id": 1,
                    "name": "John Doe",
                    "experience_years": 8
                  }
                ]
              }
            }
        
            Always return just the **JSON object**, and do not include any other text like backticks, extra keys, or formatting outside the JSON response.
          `;
  }

  // Create the prompt for OpenAI to suggest the best employees for the project or conversation context
  const prompt = `
    Previous Conversation Details: ${JSON.stringify(
      req.body.slice(0, req.body.length - 1)
    )}
    Current Request :${JSON.stringify(request)}
    Employee Data:
    ${JSON.stringify(employeeData, null, 2)}
  `;

  try {
    // Request AI response for employee suggestions based on the conversation context
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: exampleResponseformat,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 2000,
    });

    // Extract suggestion from the AI response
    const suggestion =
      aiResponse.choices[0]?.message?.content.trim() ||
      "No suggestion available.";
     console.log("suggestion", suggestion);

    // Respond back with the conversation suggestion
    return res.json({ suggestion });
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
