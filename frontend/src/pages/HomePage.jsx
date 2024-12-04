// // src/pages/HomePage.jsx
// import React from 'react';
// import AddTask from '../components/AddTask';

// const HomePage = ({ addTask }) => {
//     return (
//         <div style={containerStyles}>
//             <h2>Welcome to Task Tracker</h2>
//             <p style={descriptionStyles}>
//                 Use this tool to track your tasks effectively. Add new tasks and keep them organized.
//             </p>
//             <AddTask addTask={addTask} />
//         </div>
//     );
// };

// const containerStyles = {
//     textAlign: 'center',
//     marginTop: '20px',
//     padding: '20px',
// };

// const descriptionStyles = {
//     marginBottom: '20px',
//     fontSize: '16px',
// };

// export default HomePage;



// src/pages/HomePage.jsx
import React, { useState } from 'react';
import AddTask from '../components/AddTask';

const HomePage = ({ addTask }) => {
    const [addedTask, setAddedTask] = useState(null);

    const handleAddTask = (task) => {
        addTask(task);
        setAddedTask(task);
        setTimeout(() => setAddedTask(null), 3000); // Clear animation after 3 seconds
    };

    return (
        <div style={containerStyles}>
            <h2>Welcome to Task Tracker</h2>
            <p style={descriptionStyles}>
                Use this tool to track your tasks effectively. Add new tasks and keep them organized.
            </p>
            <AddTask addTask={handleAddTask} />
            {addedTask && (
                <div style={addedTaskStyles} className="fade-in">
                    Task "{addedTask.title}" has been successfully added!
                </div>
            )}
        </div>
    );
};

const containerStyles = {
    textAlign: 'center',
    marginTop: '1px',
    padding: '30px',
};

const descriptionStyles = {
    marginBottom: '48px',
    marginTop: '40px',
    fontSize: '24px',
};

const addedTaskStyles = {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#d4edda',
    color: '#155724',
    fontSize: '16px',
    animation: 'fadeIn 1s',
};

export default HomePage;
