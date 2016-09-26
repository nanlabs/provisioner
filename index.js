const fs = require('fs')
const os = require('os')
const exec = require('child_process').execSync

const Artifact = require("./lib/artifact.js")
const ArtifactManager = require("./lib/artifact-manager.js")
const ArtifactReader = require("./lib/artifact-reader.js")

let artReader = new ArtifactReader();
let artManager = new ArtifactManager();

let listOfArtifacts = os.homedir() + '/.provisioner/provisions.json';
let listOfRequests = os.homedir() + '/.provisioner/default.json';
let finaList;
let artifactList = artReader.readArtifacts(listOfArtifacts);
let reqList = artReader.readRequest(listOfRequests);
let checkedList = artReader.prepareRequest(listOfArtifacts, reqList);
let comparedList = artReader.compareLists(artifactList, checkedList);
let preparedList = [];
comparedList.forEach(item => artManager.getDependencies(item.name, item.selectedVersion, artifactList, preparedList));
let finalPrepList = artReader.prepareRequest(listOfArtifacts, preparedList);
finaList = artReader.compareLists(artifactList, finalPrepList)

try {
  let execution = exec('mkdir ~/opt -p && mkdir ~/.ssh -p && PASSWORD="root" && sudo apt-get install xclip -y');
} catch(e) {
  console.log(e.stdout)
}

finaList.reverse().forEach(item => item.executeInstall())
