const fs = require('fs');
const expect = require('chai').expect;

const ArtifactManager = require('../../lib/artifact-manager')
const ArtifactReader = require('../../lib/artifact-reader')

describe('Artifact Reader', function(){
  let artReader = new ArtifactReader();
  let artManager = new ArtifactManager();
  let listOfArtifacts;
  let listOfRequests = '../assets/request.json';
  let finaList;
  function executeAll(){
    let artifactList = artReader.readArtifacts(listOfArtifacts);
    let reqList = artReader.readRequest(listOfRequests);
    let checkedList = artReader.prepareRequest(listOfArtifacts, reqList);
    let comparedList = artReader.compareLists(artifactList, checkedList);
    let preparedList = [];
    comparedList.forEach(item => artManager.getDependencies(item.name, item.selectedVersion, artifactList, preparedList));
    let finalPrepList = artReader.prepareRequest(listOfArtifacts, preparedList);
    finaList = artReader.compareLists(artifactList, finalPrepList)
    finaList.reverse().forEach(item => item.executeInstall())
  }
  describe('Artifact', function(){
    it('should install all correctly!', function(){
      listOfArtifacts = '../assets/artifacts.json';
      executeAll();
      expect(finaList).to.be.a('array')
    })
    it('should fail for not having dependencies', function() {
      expect(function(){
        listOfArtifacts = '../assets/artifacts-nodep.json'
        executeAll()
      }).to.throw(Error, 'Dependencies should at least be and empty array in nvm@0.31.6')
    })
    it('should fail for not having scripts', function() {
      expect(function(){
        listOfArtifacts = '../assets/artifacts-noscript.json'
        executeAll();
      }).to.throw(Error, 'Missing scripts in artifact: nvm@0.31.6')
    })
    it('should fail for not having versions', function() {
      expect(function(){
        listOfArtifacts = '../assets/artifacts-noversions.json'
        executeAll();
      }).to.throw(Error, 'Artifact postgres should have at least one version')
    })
    it('should fail for having empty version', function() {
      expect(function(){
        listOfArtifacts = '../assets/artifacts-versionempty.json'
        executeAll()
      }).to.throw(Error, 'docker@1.12.1 is empty')
    })
  })
  describe('Requests', function(){
    it('should fail for not having version defined', function(){
      expect(function(){
        listOfArtifacts = '../assets/artifacts.json';
        listOfRequests = '../assets/request-noversion.json';
        executeAll();
      }).to.throw(Error, 'Version in sublime-text is not defined')
    })
  })
})
