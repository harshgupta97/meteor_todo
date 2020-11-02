import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../imports/api/TasksCollection';

// Insert
const insertTask = taskText => TasksCollection.insert({ text: taskText })

// Default task
const tasks = [
    'First Task',
    'Second Task',
    'Third Task',
    'Fourth Task',
    'Fifth Task',
    'Sixth Task',
    'Seventh Task'
]

Meteor.startup(() => {
    if (TasksCollection.find().count() === 0) {
        tasks.forEach(insertTask)
    }
});
