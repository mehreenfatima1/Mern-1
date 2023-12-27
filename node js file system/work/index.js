let fs = require("fs")
// //writing a file
fs.writeFile('page1.js', 'var abc="It is written using node file system"', (err) => {
    if (err) {
        return
    }
    else { console.log("task1 is done") }
})
// //appending file
fs.appendFile('page1.js', '\nvar xyz="It is appended using node file system"', (err) => {
    if (!err) { console.log("task2 is done") }
})
// //removing a single file
var filepath = "page2.js"
fs.rm(filepath, (err) => { if (err) { console.log(err) } else { console.log("file is removed") } })
// //deleting dir outside the existing folder
var dir = "../this is for reading purpose/del folder"
fs.rmdir(dir, { recursive: true }, (err) => { if (err) { console.log(err) } else { console.log("taskn1 is done") } })
// //reading dir
var dir3 = "../this is for reading purpose"
fs.readdir(dir3, (err, files) => { if (!err) { console.log(files) } })
//creating dir
var dir4 = "./this is for reading purpose"
fs.mkdir(dir4, (err) => { if (err) { console.log(err) } else { console.log("dir created") } })
//renaming file
fs.rename("page1.js", "newpage.js", () => {
    console.log("Task 5 is done")
})
//reading text line by line
const readline = require("readline");

const rl = readline.createInterface({
    input: fs.createReadStream('newpage.js'),
    crlfDelay: Infinity,
});

rl.on('line', (line) => {
    console.log(`Line from file: ${line}`);
});
//reading file
fs.readFile("newpage.js", "utf8", (err, data) => { if (err) { console.log(err) } console.log(data) })
