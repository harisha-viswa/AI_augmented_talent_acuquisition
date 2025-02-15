import React, { useState, useEffect } from "react";
import "./styles.css";  // Import styles

const RecruiterPage = ({ recruiterName }) => {
    const [fileName, setFileName] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [jobs, setJobs] = useState([]); 
    const [newJobRole, setNewJobRole] = useState(""); 
    const [experience, setExperience] = useState(""); 
    const [salary, setSalary] = useState(""); 
    const [location, setLocation] = useState(""); 

    useEffect(() => {
        const storedName = localStorage.getItem("recruiterName") || recruiterName || "Recruiter";
        setName(storedName);
    }, [recruiterName]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("");  
        }
    };

    const handleJobSubmit = () => {
        if (newJobRole.trim() === "") {
            alert("Please enter a job role!");
            return;
        }
        
        if (experience.trim() === "") {
            alert("Please enter the required years of experience!");
            return;
        }

        if (salary.trim() === "") {
            alert("Please enter the stipend or salary!");
            return;
        }

        if (location.trim() === "") {
            alert("Please enter the job location!");
            return;
        }

        if (!fileName) {
            alert("Please upload a job description (PDF)!");
            return;
        }

        setJobs([...jobs, newJobRole]); 
        setNewJobRole(""); 
        setExperience("");
        setSalary("");
        setLocation("");
        setFileName("");
        setShowModal(false); 
    };

    return (
        <div className="recruiter-container">
            {/* Navbar */}
            <nav className="navbar">
                <h1 className="company-name">Solutions</h1>
                <div className="profile-section">
                    <div className="profile-icon">👤</div> 
                    <p className="username">{name}</p> 
                </div>
            </nav>

            {/* Welcome Message */}
            <h2 className="welcome-message">Welcome, {name}</h2>

            {/* Display Added Jobs */}
            <div className="job-list">
                {jobs.map((job, index) => (
                    <div key={index} className="job-item">
                        {job}
                    </div>
                ))}
            </div>

            {/* Create New Job Button */}
            <button className="create-job-btn" onClick={() => setShowModal(true)}>
                ➕ Create a New Job
            </button>

            {/* Popup Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setShowModal(false)}>✖</button>
                        <h3>Create a Job Listing</h3>

                        <input 
                            type="text" 
                            placeholder="Job Role" 
                            className="input-field" 
                            value={newJobRole} 
                            onChange={(e) => setNewJobRole(e.target.value)}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Years of Experience" 
                            className="input-field" 
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Stipend/Salary" 
                            className="input-field" 
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Location" 
                            className="input-field" 
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />

                        {/* File Upload Section */}
                        <label className="custom-file-upload">
                            Upload Job Description (PDF)
                            <span className="file-size-note">(Max: 20MB)</span>
                            <input type="file" accept=".pdf" onChange={handleFileChange} required />            
                        </label>
                        {fileName && <p className="file-name">Selected File: {fileName}</p>}

                        {/* Submit Button */}
                        <button className="submit-btn" onClick={handleJobSubmit}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecruiterPage;

