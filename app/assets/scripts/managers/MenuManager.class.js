import AnchorLinks from '../modules/AnchorLinks.class';
const $ = require('jquery');

class MenuManager {

  constructor() {
    this.pageSectionSelector = '.page';
    this.primaryNavSelector = '.navigation';
  }

  execute(){
    this.executeAnchorLinks();
  }

  executeAnchorLinks(){
    let anchorLinks = new AnchorLinks(this.pageSectionSelector, this.primaryNavSelector);
    anchorLinks.execute();
  }

}

export default MenuManager;
