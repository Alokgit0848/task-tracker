const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    deadline: Date,
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' }
});

module.exports = mongoose.model('Task', TaskSchema);
