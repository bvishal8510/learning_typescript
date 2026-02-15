import fs = require('fs');
import path = require('path');
import uuid = require('uuid');

interface taskInterface {
    id:string,
    name:string,
    frequency: number
}

interface sucessMessageInterface {
    status:string,
    msg:object|string
}

function getPathUrl(fileName:string):string {
    let fullPath:string = path.join(__dirname, fileName);
    return fullPath;
}

function getLocalDataFromFile(fileName:string):any|Error {
    try {
        let filePathUrl:string = getPathUrl(fileName);
        let storageData = fs.readFileSync(filePathUrl, 'utf-8');
        return JSON.parse(storageData);
    }
    catch(err:any) {
        console.log("Error occured in getting data from file :",err);
        throw new Error(err);
    }
}

export function addTask(task:taskInterface, fileName:string):sucessMessageInterface|Error {
    try {
        let id:string = uuid.v4();
        task.id = id;
        let filePathUrl:string = getPathUrl(fileName);

        let taskList = getLocalDataFromFile(fileName);

        taskList.push(task);

        fs.writeFileSync(filePathUrl, JSON.stringify(taskList), 'utf-8');

        let response: sucessMessageInterface = {
            "status":"Added",
            msg : {
                id:task.id
            }
        }

        return response;
    }
    catch(err:any) {
        console.log("Error occured in add task :",err);
        throw new Error(err);
    }
}

export function getAllTasks(fileName:string):sucessMessageInterface|Error {
    try {
        let taskList = getLocalDataFromFile(fileName);

        let response:sucessMessageInterface = {
            status:"Fetched",
            msg : taskList
        }

        return response;
    }
    catch(err:any) {
        console.log("Error occured in getting all tasks :",err);
        throw new Error(err);
    }
}

export function getTaskById(id:string, fileName:string):sucessMessageInterface|Error {
    try {
        let taskList = getLocalDataFromFile(fileName);

        let response :sucessMessageInterface;
        for(let task of taskList) {
            if (task.id === id) {
                response = {
                    status:"Fetched",
                    msg: task
                }
                return response;
            }
        }
        response = {
            status:"Failed",
            msg:"No record found"
        }
        return response;

    }
    catch(err:any) {
        console.log("Error occured in getting task by id :",err);
        throw new Error(err);
    }
}

export function editTaskById(incomingTask:taskInterface, fileName:string):sucessMessageInterface|Error {
    try {
        let taskList = getLocalDataFromFile(fileName);
        let response :sucessMessageInterface;
        for(let i=0;i<taskList.length;++i) {
            if (taskList[i].id === incomingTask.id) {
                taskList[i] = incomingTask;
                let filePathUrl:string = getPathUrl(fileName);
                fs.writeFileSync(filePathUrl, JSON.stringify(taskList), 'utf-8');
                response = {
                    status:"Updated",
                    msg: taskList[i]
                }
                return response;
            }
        }
        response = {
            status:"Failed",
            msg:"No record found"
        }
        return response;

    }
    catch(err:any) {
        console.log("Error occured in getting task by id :",err);
        throw new Error(err);
    }
}

export function deleteTaskById(id:string, fileName:string):sucessMessageInterface|Error {
    try {
        let taskList = getLocalDataFromFile(fileName);
        let response :sucessMessageInterface;
        for(let i=0;i<taskList.length;++i) {
            if (taskList[i].id === id) {
                response = {
                    status:"Deleted",
                    msg: taskList[i]
                }
                taskList.splice(i,1);
                let filePathUrl:string = getPathUrl(fileName);
                fs.writeFileSync(filePathUrl, JSON.stringify(taskList), 'utf-8');
                return response;
            }
        }
        response = {
            status:"Failed",
            msg:"No record found"
        }
        return response;

    }
    catch(err:any) {
        console.log("Error occured in getting task by id :",err);
        throw new Error(err);
    }
}