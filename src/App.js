import React, { useState } from 'react';
import './App.css';
import pwcLogo from './assets/pwc-logo.png';

function App() {
  const [projects, setProjects] = useState(["Project 1", "Project 2", "Project 3"]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [optionalSkills, setOptionalSkills] = useState([]);
  const [resources, setResources] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [tempSkill, setTempSkill] = useState("");
  const [tempOptionalSkill, setTempOptionalSkill] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setNewProjectName("");
    setTechnicalSkills([]);
    setOptionalSkills([]);
    setResources("");
    setProjectDescription("");
    setTempSkill("");
    setTempOptionalSkill("");
  };

  const addProject = async () => {
    // Ensure that project name, skills, and resources are valid
    if (!newProjectName.trim() || technicalSkills.length === 0 || !resources || isNaN(resources)) {
      setError("Project name, required skills, and a valid number of resources are mandatory.");
      return;
    }

    setLoading(true);
    setError("");

    const projectData = {
      projectName: newProjectName,
      requiredSkills: technicalSkills,
      optionalSkills: optionalSkills,
      numResources: Number(resources), // Make sure resources is treated as a number
      description: projectDescription
    };

    try {
      const response = await fetch("http://localhost:3001/api/create-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData)
      });

      const result = await response.json();

      if (response.ok) {
        setProjects([...projects, newProjectName]);
        resetForm();
        setShowPrompt(false);
      } else {
        setError(result.message || "Failed to create project.");
      }
    } catch (err) {
      setError("Error connecting to server.");
    }

    setLoading(false);
  };

  // Add skills as chips when Enter is pressed
  const handleSkillKeyPress = (e, type) => {
    if (e.key === "Enter" && type === "technical" && tempSkill.trim()) {
      setTechnicalSkills([...technicalSkills, tempSkill]);
      setTempSkill("");
    } else if (e.key === "Enter" && type === "optional" && tempOptionalSkill.trim()) {
      setOptionalSkills([...optionalSkills, tempOptionalSkill]);
      setTempOptionalSkill("");
    }
  };

  // Remove skill chip
  const removeSkill = (type, index) => {
    if (type === "technical") {
      setTechnicalSkills(technicalSkills.filter((_, i) => i !== index));
    } else {
      setOptionalSkills(optionalSkills.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <div className="header">
        <img src={pwcLogo} alt="PwC Logo" className="pwc-logo" />
        <button className="create-project-btn" onClick={() => setShowPrompt(true)}>
          Create Project
        </button>
      </div>

      <div className="content">
        <div className="sidebar">
          {projects.map((project, index) => (
            <div key={index} className="project-block">{project}</div>
          ))}
        </div>
      </div>

      {showPrompt && (
        <div className={`prompt-window ${isMaximized ? 'maximized' : ''}`}>
          <div className="prompt-header">
            <span>New Project</span>
            <div className="prompt-actions">
              <button onClick={() => setIsMaximized(!isMaximized)}>🔳</button>
              <button onClick={() => setShowPrompt(false)}>❌</button>
            </div>
          </div>
          <div className="prompt-body">
            <input 
              type="text"
              placeholder="Enter project name..."
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            
            {/* Technical Skills */}
            <div className="chip-container">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="chip">
                  {skill} <span onClick={() => removeSkill("technical", index)}>❌</span>
                </div>
              ))}
              <input 
                type="text"
                placeholder="Enter required technical skills..."
                value={tempSkill}
                onChange={(e) => setTempSkill(e.target.value)}
                onKeyDown={(e) => handleSkillKeyPress(e, "technical")}
              />
            </div>

            {/* Optional Skills */}
            <div className="chip-container">
              {optionalSkills.map((skill, index) => (
                <div key={index} className="chip">
                  {skill} <span onClick={() => removeSkill("optional", index)}>❌</span>
                </div>
              ))}
              <input 
                type="text"
                placeholder="Enter optional technical skills..."
                value={tempOptionalSkill}
                onChange={(e) => setTempOptionalSkill(e.target.value)}
                onKeyDown={(e) => handleSkillKeyPress(e, "optional")}
              />
            </div>

            <input 
              type="number"
              placeholder="Number of resources needed..."
              value={resources}
              onChange={(e) => setResources(e.target.value)}
            />

            <textarea 
              placeholder="Enter project description..."
              rows="4"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            ></textarea>

            {error && <div className="error-message">{error}</div>}

            <button 
              className="add-project-btn" 
              onClick={addProject} 
              disabled={loading}
            >
              {loading ? "Adding Project..." : "Add Project"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
