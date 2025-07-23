// Path Module: used to manipulate and get info abou the path system
const path = require('path');

// platform separator
const separator = path.sep;
console.log(separator);

// joins sequences of path segments using separators. It returns a normalized resulting the path to a file
const filePath = path.join('/path_test_folder','test_subfolder','test.txt');
console.log(filePath);

// shows only the final file of a path
const base = path.basename(filePath);
console.log(base);

// results an absolute path
const absolutePath = path.resolve(__dirname,'path_test_folder','test_subfolder','test.txt');
console.log(absolutePath);