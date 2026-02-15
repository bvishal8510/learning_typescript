"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_js_1 = require("./task.js");
(function operations() {
    try {
        var tasks = (0, task_js_1.getAllTasks)("localDataStorageFile.txt");
        console.log("All tasks", tasks);
        var response = (0, task_js_1.addTask)({ name: "buy grocery", frequency: 2, id: "" }, "localDataStorageFile.txt");
        console.log("response", response);
        var response2 = (0, task_js_1.getTaskById)("e4d8ee22-7812-4127-b1d5-f0481163375d", "localDataStorageFile.txt");
        console.log("response2", response2);
        var response5 = (0, task_js_1.getTaskById)("123", "localDataStorageFile.txt");
        console.log("response5", response5);
        var response3 = (0, task_js_1.editTaskById)({ name: "do laundry", frequency: 5, id: "e4d8ee22-7812-4127-b1d5-f0481163375d" }, "localDataStorageFile.txt");
        console.log("response3", response3);
        var response4 = (0, task_js_1.editTaskById)({ name: "do laundry", frequency: 5, id: "e4d8ee22-7812-4127-b1d5" }, "localDataStorageFile.txt");
        console.log("response4", response4);
        var response6 = (0, task_js_1.deleteTaskById)("b5a466cd-91cf-4ed7-b8a7-e3b3f7b28bf", "localDataStorageFile.txt");
        console.log("response6", response6);
        var response7 = (0, task_js_1.deleteTaskById)("5fb438ac-90bc-49ed-9f8c-d54dd8f6f711", "localDataStorageFile.txt");
        console.log("response7", response7);
    }
    catch (err) {
        console.log("Error occured :", err.toString());
    }
})();
