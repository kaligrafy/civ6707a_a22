import fs from 'fs';

const readJsonData = function(filePath = './data.json') {
    const data = JSON.parse(fs.readFileSync(filePath)) || {};
    return data;
};

const writeJsonData = function(filePath = './data.json', data) {
    const options = {
        flag: 'w'
    };
    fs.writeFileSync(filePath, JSON.stringify(data), options);
};

export {
    readJsonData,
    writeJsonData
}