const fs = require('fs');
const Artifact = require("./artifact");


module.exports = class ArtifactReader {
  readArtifacts(list) {
    let artifactList = [];
    let artifacts = JSON.parse(fs.readFileSync(list, 'utf8'));
    for (let i in artifacts) {
      if (Object.keys(artifacts[i]).length === 0 && artifacts[i].constructor === Object) {
        throw Error('Artifact '+ i +' should have at least one version');
      } else {
        let tempArt = new Artifact(i, artifacts[i]);
        tempArt.validateSelf();
        artifactList.push(tempArt);
      }
    }
    return artifactList;
  }
  readRequest(file) {
    let requestList = [];
    let requests = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (let category in requests){
      requestList = requestList.concat(requests[category]);
    }
    return requestList;
  }
  prepareRequest(arrayArtifacts, arrayRequests) {
    let existence;
    let artifactsList = this.readArtifacts(arrayArtifacts);
    let requestList = arrayRequests.map((item, i) => {
      let tempArt = new Artifact(arrayRequests[i]);
      tempArt.versions = tempArt.parseNameVersion(tempArt.name, 'version');
      tempArt.name = tempArt.parseNameVersion(tempArt.name, 'name');
      return tempArt;
    });
    return requestList;
  }
  compareLists(artifactsList, requestList) {
    let verifiedList = requestList.map(item => {
      let existence = artifactsList.find(req => {
        return req.name === item.name && req.versions[item.versions];
      })
      if(!existence) {
        throw new Error(`${item.name}@${item.versions} was not found in the Artifacts List`);
      } else {
        for (let i in artifactsList) {
          if(artifactsList[i].name === item.name && artifactsList[i].versions[item.versions]) {
            return new Artifact(item.name, artifactsList[i].versions[item.versions], item.versions);
          }
        }
      }
    })
    return verifiedList;
  }
}
