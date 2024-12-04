// import React, { useState } from 'react';

// const AddTask = ({ addTask }) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [deadline, setDeadline] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (title && description && deadline) {
//             addTask({ title, description, deadline, status: 'Pending' });
//             setTitle('');
//             setDescription('');
//             setDeadline('');
//         }
//     };

//     return (
//         <form className="task-form" onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Task Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//             />
//             <textarea
//                 placeholder="Task Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//             ></textarea>
//             <input
//                 type="date"
//                 value={deadline}
//                 onChange={(e) => setDeadline(e.target.value)}
//                 required
//             />
//             <button type="submit">Add Task</button>
//         </form>
//     );
// };

// export default AddTask;


import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && deadline) {
            addTask({ title, description, deadline, status: 'Pending' });
            setTitle('');
            setDescription('');
            setDeadline('');
        }
    };

    return (
        <div className="task-container">
            <h2 className="form-title">Add New Task</h2>
            <form className="task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="input-field"
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="input-field"
                ></textarea>
                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    required
                    className="input-field"
                />
                <button type="submit" className="submit-btn">Add Task</button>
            </form>
            <style jsx>{`
                .task-container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background: #f9f9f9;
                }

                .form-title {
                    text-align: center;
                    font-size: 1.5rem;
                    margin-bottom: 20px;
                    color: #333;
                }

                .task-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .input-field {
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: 1rem;
                    transition: all 0.3s;
                }

                .input-field:focus {
                    outline: none;
                    border-color: #4CAF50;
                    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
                }

                .submit-btn {
                    background-color: #4CAF50;
                    color: white;
                    padding: 12px;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .submit-btn:hover {
                    background-color: #45a049;
                }

                @media (max-width: 600px) {
                    .task-container {
                        padding: 15px;
                    }

                    .form-title {
                        font-size: 1.3rem;
                    }

                    .input-field {
                        font-size: 0.9rem;
                    }

                    .submit-btn {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default AddTask;
