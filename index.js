const fs = require("fs");


//write/create file

 async function writeFileSync(){
    await fs.writeFileSync('example.html', '<h1>Hello World!</h1>');
    console.log("Written");
}

// (async () => {
//    await writeFileSync()
// })()



//read data

 async function readFileSync() {
    const readData = await  fs.readFileSync('toDo.txt', 'utf8');
        console.log(readData);
 }
/*
// (async () => {
//     await readFileSync();
// })

const fs = require("fs");

// Write/Create file
function writeFileSync() {
    fs.writeFileSync('example.html', '<h1>Hello World!</h1>');
    console.log("File written successfully.");
}

(async () => {
    try {
        writeFileSync();
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
})();


*/

//rename
async function renameFileSync() {
    const renameData =  await fs.renameSync('example.html', 'new.html');
    console.log("update file");
}






// async function renameFileSync() {
//     try {
//         fs.renameSync('example.html', 'new.html');
//         console.log("File renamed successfully.");
//     } catch (error) {
//         console.error("An error occurred:", error.message);
//     }
// }


async function deleteFileSync() {
    await fs.unlinkSync('new.html');
    console.log("deleted file");
}

(async ()=>{
    await deleteFileSync();
})()


/*
function deleteFileSync() {
    try {
        fs.unlinkSync('new.html');
        console.log("File deleted successfully.");
    } catch (error) {
        console.error("An error occurred while deleting the file:", error.message);
    }
}

(async () => {
    deleteFileSync();
})();
*/

//create a folder


function createFolder() {
    try {
        fs.mkdirSync("hot");
        console.log("Folder created successfully.");
    } catch (e) {
        console.error("An error occurred while creating the folder:", e.message);
    }
}

(async () => {
   await createFolder(); // No need for `await` here.
})();

/*

Asynchronous Version:
    If you want to use the asynchronous method fs.mkdir, here’s the corrected version:

async function createFolder() {
    try {
        await new Promise((resolve, reject) => {
            fs.mkdir("new", (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
        console.log("Folder created successfully.");
    } catch (e) {
        console.error("An error occurred while creating the folder:", e.message);
    }
}

(async () => {
    await createFolder();
})();

*/