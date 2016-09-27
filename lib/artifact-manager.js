module.exports = class ArtifactManager {
  getDependencies(name, version, validatedList, result) {
    result = result || [];
    let found = validatedList.find((artifact, index) => this.checkDependency(name, version, index, validatedList));
    if (found && found.versions[version].dependencies) {
      let deps = found.versions[version].dependencies;
      for( let i = 0; i <= deps.length; i++){
        if(typeof deps[i] === 'string') {
          if(result.indexOf(deps[i]) === -1){
            result.push(deps[i]);
            this.getDependencies(found.parseNameVersion(deps[i], 'name'), found.parseNameVersion(deps[i], 'version'), validatedList, result);
          }
        }
      }
      if(result.indexOf(found.name + "@" + version) === -1) {
        result.unshift(found.name + "@" + version);
      }
    }
    return result;
  }
  checkDependency(name, version, i, validatedList) {
    return validatedList[i].name === name && validatedList[i].versions[version];
  }
}
