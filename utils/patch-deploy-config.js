const fs = require('fs');
const path = './src/config.js'
 
fs.readFile(path, 'utf-8', function(err, data) {
    if (err) throw err;
 
    // data = data.replace(/.*const contractName.*/gim, `const contractName = 'dev-1618440176640-7650905';`);
    data = data.replace(/.*const contractName.*/gim, `const contractName = 'dev-1624406486386-79437689012031';`);
 
    fs.writeFile(path, data, 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
    })
})
