const fs = require('fs').promises;
const path = require('path');

/*
fs.readdir(path.resolve(__dirname))
.then(files => console.log(files))
.catch(e => console.log(e));
*/

//Sincrona - Para e nãa executa nada até ela retornar
//Assincrona - Executa enquanto tem outras coisas acontecendo

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);
        console.log(file, stats.isDirectory());

        if(stats.isDirectory()){ //Se tiver pasta, você entra nela
            readdir(fileFullPath);
            continue;
        }

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;
    }
}

readdir('f:\\Coding\\curso-js-ts-avancado\\');