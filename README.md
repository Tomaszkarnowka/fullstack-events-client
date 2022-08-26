# fullstack-events-client
## Back-End Configuration
1. Make sure you have MySQL Server installed on your machine. Please follow this [MySQL Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/installing.html) for more information.

2. Create a new database in your DB client viewer, and call it ```recruitmentdb```.

3. Use the following credentials for the ```recruitmentdb``` database:
```
user: 'root',
password: 'Sigi#vag06',
database: 'recruitmentdb',
host: "localhost",
dialect: "mysql"
```

4. Go to the server/db sub-directory. Grab the config.sql dump file and load it in your DB client viewer.

5. Use the ```recruitmentdb``` database and execute the ```config.sql``` dump file to create a ```recruitmentdb``` table with some content.

6. In the ```server``` directory, ```run npm``` i in order to install node_modules.

7. Finally, run ```npm run``` in order to start the server.

## Front-End Configuration
1. cd into client directory and run ```npm i``` in order to install node_modules.

2. Finally, run ```npm start```, react will open a new tab with the web application.

Author
