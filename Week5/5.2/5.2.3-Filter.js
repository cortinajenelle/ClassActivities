// https://jsonplaceholder.typicode.com/todos?_limit=50

// filter the to-dos for incomplete tasks

const incompleteTasks = data.filter(task => task.title == true);
console.log(incompleteTasks);

// filter for user 3's tasks

const newArray = data.filter(task => {
    return task.userId == 3;
});


// filter for tasks with a title less than 24 characters long