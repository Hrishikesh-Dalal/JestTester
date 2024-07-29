const readline = require('readline');
const fs = require('fs');
const path = require('path');

const testFolder = './tests';
function displayJest() {
    console.log('      _            _   ');
    console.log('     | |          | |  ');
    console.log('     | | ___  __ _| |_ ');
    console.log(' _   | |/ _ \\/ _` | __|');
    console.log('| |__| |  __/ (_| | |_ ');
    console.log(' \\____/ \\___|\\__,_|\\__|');
}




function displayStartupPage() {
    console.log('Welcome to Jest Test Runner!');
    console.log("Date : " + new Date().toLocaleDateString());
    console.log('----------------------------');
    displayJest();
    console.log('----------------------------');

    const testFiles = getTestFiles();
    if (testFiles.length > 0) {
        testFiles.forEach((file, index) => {
            console.log(`${index + 1}. Run ${file}`);
        });
    } else {
        console.log('No test files found.');
    }
    console.log('-1. Exit');
}

function getTestFiles() {
    try {
        return fs.readdirSync(testFolder).filter(file => file.endsWith('.test.js'));
    } catch (error) {
        console.error(`Error reading test files: ${error.message}`);
        return [];
    }
}

function runTestFile(fileNumber) {
    const testFiles = getTestFiles();
    const fileToRun = testFiles[fileNumber - 1];
    if (fileToRun) {
        console.log(`Running test file ${fileToRun}`);
        const { exec } = require('child_process');
        exec(`npm run test ${path.join(testFolder, fileToRun)}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error running test file: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } else {
        console.log('Invalid file number');
    }
}

function startProgram() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    displayStartupPage();

    rl.question('Enter your choice: ', (choice) => {
        if (choice === '-1') {
            rl.close();
            return;
        }

        const fileNumber = parseInt(choice, 10);
        if (!isNaN(fileNumber)) {
            runTestFile(fileNumber);
        } else {
            console.log('Invalid choice');
        }

        startProgram();
    });
}

startProgram();
