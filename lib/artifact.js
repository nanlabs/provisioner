<<<<<<< HEAD
const exec = require('child_process').execSync
=======
const exec = require('child_process').execSync;
>>>>>>> development

module.exports =


class Artifact {
  constructor (name, versions, selectedVersion = 'latest'){
    this.name = name,
    this.versions = versions
    this.selectedVersion = selectedVersion
  }

  parseNameVersion(nameversion, part){
<<<<<<< HEAD
    let packSplit = nameversion.split('@')
    if (part === 'name') {
      return packSplit[0]
    } else if (packSplit.length === 1) {
      throw new Error(`Version in ${packSplit[0]} is not defined`)
    }
    return packSplit[packSplit.length - 1]
=======
    let packSplit = nameversion.split('@');
    if (part === 'name') {
      return packSplit[0];
    } else if (packSplit.length === 1) {
      throw new Error(`Version in ${packSplit[0]} is not defined`);
    }
    return packSplit[packSplit.length - 1];
>>>>>>> development
  }

  validateSelf() {
    for (let version in this.versions){
      if(Object.keys(this.versions[version]).length === 0){
<<<<<<< HEAD
        throw new Error(`${this.name}@${version} is empty`)
=======
        throw new Error(`${this.name}@${version} is empty`);
>>>>>>> development
      } else if(!this.versions[version].scripts || this.versions[version].scripts.length === 0) {
        throw new Error(`Missing scripts in artifact: ${this.name}@${version}`);
      } else if(!this.versions[version] || this.versions[version].length === 0) {
        throw new Error(`Missing version ${version} in artifact ${this.name}`);
      } else if(!this.versions[version].dependencies) {
        throw new Error(`Dependencies should at least be and empty array in ${this.name}@${version}`);
      }
    }
  }

  executeInstall(versionToInstall) {
    versionToInstall = this.selectedVersion;
    let scriptsToExecute = this.versions.scripts;
    for (let i = 0; i <= scriptsToExecute.length; i++){
      try {
        let execution = exec(scriptsToExecute[i]);
<<<<<<< HEAD
        console.log(execution.toString())
      } catch(e) {
        console.log(e.stdout.toString())
=======
        console.log(execution.toString());
      } catch(e) {
        console.log(e.stdout.toString());
>>>>>>> development
      }
    }
  }
}
