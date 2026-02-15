import { addTask, getAllTasks, getTaskById, editTaskById, deleteTaskById } from "./task.js";

(function operations():void {
    try {
        let tasks = getAllTasks("localDataStorageFile.txt");
        console.log("All tasks", tasks);
        let response = addTask({name:"buy grocery",frequency:2, id:""}, "localDataStorageFile.txt");
        console.log("response",response);
        let response2 = getTaskById("e4d8ee22-7812-4127-b1d5-f0481163375d","localDataStorageFile.txt");
        console.log("response2",response2);
        let response5 = getTaskById("123","localDataStorageFile.txt");
        console.log("response5",response5);
        let response3 = editTaskById({name:"do laundry",frequency:5, id:"e4d8ee22-7812-4127-b1d5-f0481163375d"},"localDataStorageFile.txt");
        console.log("response3",response3);
        let response4 = editTaskById({name:"do laundry",frequency:5, id:"e4d8ee22-7812-4127-b1d5"},"localDataStorageFile.txt");
        console.log("response4",response4);
        let response6 = deleteTaskById("b5a466cd-91cf-4ed7-b8a7-e3b3f7b28bf","localDataStorageFile.txt");
        console.log("response6",response6);
        let response7 = deleteTaskById("5fb438ac-90bc-49ed-9f8c-d54dd8f6f711","localDataStorageFile.txt");
        console.log("response7",response7);
    }
    catch(err:any) {
        console.log("Error occured :",err.toString());
    }
})();