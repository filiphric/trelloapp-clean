const updateJsonFile = require('update-json-file');

module.exports.seedDatabase = () => {

  const filename = './trelloapp-clean/public/data/data.json';

  updateJsonFile(filename, (data) => { 

    data.boards = [{
      "name": "Kanban board",
      "user": 0,
      "id": 31092054328,
      "starred": false,
      "created": "2021-02-14"
    }]; 
    data.lists = [
    {
      "boardId": 31092054328,
      "title": "Done",
      "id": 32974107251,
      "created": "2021-02-14"
    },
    {
      "boardId": 31092054328,
      "title": "Ready to start",
      "id": 32974107299,
      "created": "2021-02-14"
    }]; 
    data.tasks = [ {
      "boardId": 31092054328,
      "description": "",
      "completed": false,
      "listId": 32974107299,
      "title": "Bug on main page",
      "id": 24407729243,
      "created": "2021-02-14",
      "deadline": "2021-02-17"
    },
    {
      "boardId": 31092054328,
      "description": "",
      "completed": false,
      "listId": 32974107299,
      "title": "Mapping to main",
      "id": 89774575419,
      "created": "2021-02-14",
      "deadline": "2021-02-17"
    }]; 
    data.users = [{
      "email": "test@email.com",
      "password": "$2a$10$A8/Z0O45OhGz/tnMIixMf.8Yrsst2PjDZHkPmPiHwIiv3bSOrkRE6",
      "id": 1
    }]; 
    
    return data;
  });

  return null;

};

