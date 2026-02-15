"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.getAllTasks = getAllTasks;
exports.getTaskById = getTaskById;
exports.editTaskById = editTaskById;
exports.deleteTaskById = deleteTaskById;
var fs = require("fs");
var path = require("path");
var uuid = require("uuid");
function getPathUrl(fileName) {
    var fullPath = path.join(__dirname, fileName);
    return fullPath;
}
function getLocalDataFromFile(fileName) {
    try {
        var filePathUrl = getPathUrl(fileName);
        var storageData = fs.readFileSync(filePathUrl, 'utf-8');
        return JSON.parse(storageData);
    }
    catch (err) {
        console.log("Error occured in getting data from file :", err);
        throw new Error(err);
    }
}
function addTask(task, fileName) {
    try {
        var id = uuid.v4();
        task.id = id;
        var filePathUrl = getPathUrl(fileName);
        var taskList = getLocalDataFromFile(fileName);
        taskList.push(task);
        fs.writeFileSync(filePathUrl, JSON.stringify(taskList), 'utf-8');
        var response = {
            "status": "Added",
            msg: {
                id: task.id
            }
        };
        return response;
    }
    catch (err) {
        console.log("Error occured in add task :", err);
        throw new Error(err);
    }
}
function getAllTasks(fileName) {
    try {
        var taskList = getLocalDataFromFile(fileName);
        var response = {
            status: "Fetched",
            msg: taskList
        };
        return response;
    }
    catch (err) {
        console.log("Error occured in getting all tasks :", err);
        throw new Error(err);
    }
}
function getTaskById(id, fileName) {
    try {
        var taskList = getLocalDataFromFile(fileName);
        var response = void 0;
        for (var _i = 0, taskList_1 = taskList; _i < taskList_1.length; _i++) {
            var task = taskList_1[_i];
            if (task.id === id) {
                response = {
                    status: "Fetched",
                    msg: task
                };
                return response;
            }
        }
        response = {
            status: "Failed",
            msg: "No record found"
        };
        return response;
    }
    catch (err) {
        console.log("Error occured in getting task by id :", err);
        throw new Error(err);
    }
}
function editTaskById(incomingTask, fileName) {
    try {
        var taskList = getLocalDataFromFile(fileName);
        var response = void 0;
        for (var i = 0; i < taskList.length; ++i) {
            if (taskList[i].id === incomingTask.id) {
                taskList[i] = incomingTask;
                var filePathUrl = getPathUrl(fileName);
                fs.writeFileSync(filePathUrl, JSON.stringify(taskList), 'utf-8');
                response = {
                    status: "Updated",
                    msg: taskList[i]
                };
                return response;
            }
        }
        response = {
            status: "Failed",
            msg: "No record found"
        };
        return response;
    }
    catch (err) {
        console.log("Error occured in getting task by id :", err);
        throw new Error(err);
    }
}
function deleteTaskById(id, fileName) {
    try {
        var taskList = getLocalDataFromFile(fileName);
        var response = void 0;
        for (var i = 0; i < taskList.length; ++i) {
            if (taskList[i].id === id) {
                response = {
                    status: "Deleted",
                    msg: taskList[i]
                };
                taskList.splice(i, 1);
                var filePathUrl = getPathUrl(fileName);
                fs.writeFileSync(filePathUrl, JSON.stringify(taskList), 'utf-8');
                return response;
            }
        }
        response = {
            status: "Failed",
            msg: "No record found"
        };
        return response;
    }
    catch (err) {
        console.log("Error occured in getting task by id :", err);
        throw new Error(err);
    }
}
