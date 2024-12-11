const Application = require('../models/Application'); 

const submitApplication = async (req, res) => {
  try {
    const applicationData = req.body; 
    const application = new Application(applicationData); 
    await application.save(); 
    console.log('Application submitted:', application);
    res.status(201).json({ message: 'Application submitted successfully', application }); 
  } catch (error) {
    res.status(400).json({ message: 'Error submitting application', error: error.message }); 
  }
};

module.exports = { submitApplication };
