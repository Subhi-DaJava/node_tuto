// 25/09/2022 
// Promise await 
const { readFile, writeFile } = require('fs').promises;



const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile('./content/result-mind-grenade-promises.txt', 
        `THIS IS AWESOME : ${first}  ${second}`, {flag: 'a'}); // repeat the content
        console.log(first, second);
        
    } catch (error) {
        console.log(error);
    }
    
}

// const { readFile, writeFile } = require('fs');
// const util = require('util'); // importe util module
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf-8');
//         const second = await readFilePromise('./content/second.txt', 'utf-8');
//         await writeFilePromise('./content/result-mind-grenade.txt', 
//         `THIS IS AWESOME : ${first}  ${second}`);
//         console.log(first, second);
        
//     } catch (error) {
//         console.log(error);
//     }
    
// }

start();


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err) {
//                 reject(err) ;
//             }
//             else {
//                 resolve(data);
//             }
//         });
//     });
// };

// same approach 
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err));