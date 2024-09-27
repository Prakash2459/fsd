const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

fs.writeFile(filePath, 'This is an example of file writing in Node.js.\n', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully.');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('File content after writing:\n', data);

        fs.appendFile(filePath, 'Appending more text to the file.\n', (err) => {
          if (err) {
            console.error('Error appending to file:', err);
          } else {
            console.log('Text appended successfully.');

            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                console.error('Error reading file:', err);
              } else {
                console.log('File content after appending:\n', data);

                fs.unlink(filePath, (err) => {
                  if (err) {
                    console.error('Error deleting file:', err);
                  } else {
                    console.log('File deleted successfully.');
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
