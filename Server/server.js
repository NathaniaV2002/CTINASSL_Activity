const express = require('express');
const cors = require('cors');
 
const app = express();
 
// Middleware
app.use(express.json());
app.use(cors({ origin: true }));
 
// GET Request
app.get('/', (request, response) => {
    response.status(200).send('Hello! Student Request Successful!');
});
 
// POST Request
app.post('/greetings', (request, response) => {
 
    console.log('POST request received!');
 
    const { name, course, section } = request.body;
 
    // Generate personalized message
    const message = `Hello ${name}, welcome to the ${course} course, section ${section}!`;
 
    // Display student information in VS Code Terminal
    console.log('================================');
    console.log('       STUDENT INFORMATION');
    console.log('================================');
    console.log('Name:', name);
    console.log('Course:', course);
    console.log('Section:', section);
    console.log('Message:', message);
    console.log('================================');
 
    // Send response to Postman
    response.status(200).json({
        name: name,
        course: course,
        section: section,
        message: message
    });
 
});
 
// Start Server
app.listen(8000, (error) => {
 
    if (error) {
        console.error('Error Starting Server:', error);
        process.exit(1);
    }
 
    console.log('Server running on port:', 8000);
 
});