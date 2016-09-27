# NaN Provisioner
### Description
Basic provisioner for NaN Labs

<<<<<<< HEAD
This provisioner will give you two files located in $HOME/.provisioner that you can edit at your preference, provisions.json contains the information for all the artifacts to install, while default.json is the list of artifacts and the version to install, you can remove or add new ones (given that you added them in provisions.json too).

### Basic Usage
If you don't have NodeJS yet, install it by running the **install-nodejs.sh** file

Edit the files or use the provided ones to install all, and run
```
 node index.js
```
=======
This provisioner will give you two files located in `$HOME/provisioner` that you can edit at your preference, provisions.json contains the information for all the artifacts to install, while default.json is the list of artifacts and the version to install, you can remove or add new ones (given that they are or you added them in provisions.json too).

### Basic Usage
Execute `./prepare-files.sh` in your terminal to get started, this will make the `$HOME/provisioner` folder.
In case of Permission Denied, run `chmod u+x prepare-files.sh` and then execute `./prepare-files.sh` again.

Edit the files or use the provided ones to install all the defaults, and run `node index.js`
>>>>>>> development


### Default includes

| Name | Description |
| --- | --- |
| KeePass 2 | Store your passwords securely |
| Google Chrome | You know... For browsing |
| ATOM | IDE for Web Development |
| IntelliJ Idea 2.1 | IDE for Java Development |
| Android Studio | IDE for Android Development |
| Docker | Virtualization tool. Included docker-compose |
| Terminator | Practical terminal console. Linked to F12 HotKey |
| Android SDK | Android Development Kit. Install latests tools and all sdk versions |
| Oracle JDK 1.8 | Java Development Kit from Oracle v1.8 (not Open-JDK) |
| SQLite | SQLite database |
| Docker MySql | Docker container to run a local MySql Database |
| Docker Mongo | Docker container to run a local Mongo Database |
| Docker Postgres | Docker container to run a local Postgres Database |
| Docker Elasticsearch | Docker container to run a local Elasticsearch Search Engine |
| Docker Kibana | Docker container to run a local Kibana (Elasticsearch Analytics) tool |
| Mongo Client | Mongo GUI to interact with Mongo Databases |
| MySql Workbench | MySql GUI to interact with MySql Databases |
| SQLite Browser | SQLite GUI to interact with SQLite Databases |
| PGAdmin3 | Postgres GUI to interact with Postgres Databases |
| JMeter 3.0 | Tools for Stress Testing and more |
| Apache2 Utils | Various tools. Useful for `ab` (Apache Benchmark) |
