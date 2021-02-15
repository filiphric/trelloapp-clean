const updateJsonFile = require('update-json-file');

module.exports.resetDatabase = () => {

  const filename = './trelloapp-clean/public/data/data.json';

  updateJsonFile(filename, (data) => { 

    data.boards = []; 
    data.lists = []; 
    data.tasks = []; 
    data.users = [{
      "email": "test@email.com",
      "password": "$2a$10$A8/Z0O45OhGz/tnMIixMf.8Yrsst2PjDZHkPmPiHwIiv3bSOrkRE6",
      "id": 1
    }]; 
    
    return data;
  });

  return null;

};