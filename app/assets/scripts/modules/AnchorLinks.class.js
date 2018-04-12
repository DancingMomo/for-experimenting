import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class AnchorLinks {

    constructor(pageSectionsSelector, primaryNavSelector = 'header', activeLinkClass="is-current-link"){
        this.pageSections = $(pageSectionsSelector);
        this.headerLinks = $(primaryNavSelector + ' a');
        this.activeLinkClass = activeLinkClass;
        this.pageSectionAnchorAttr = 'data-anchor-link';
        this.scrollDownOffset = "18%";
        this.scrollUpOffset = "-60%";

        console.log(`Selector: ${pageSectionsSelector}`);
        console.log($(pageSectionsSelector));
    }

    execute(){
      console.log(this);
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    /*
    override default attribute where the page section keeps the selector of its corresponding anchor tag
    */
    setPageSectionAnchorAttr(attribute){
        this.pageSectionAnchorAttr = attribute;
    }

    setScrollUpOffset(offset){
        this.scrollUpOffset = offset;
    }

    setSrollDownOffset(offset){
        this.scrollDownOffset = offset;
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }

    createPageSectionWaypoints(){
      console.log('entering waypoints');
        /*Two waypoints are created for each page section to account for offsets for scrolling up and down*/
        this.pageSections.each((i) => {
          console.log('page logged');
            /*Set waypoint for scrolling down*/
            let downConfig = {
                element: this.pageSections[i],
                handler: (direction) => {
                    if(direction === "down"){
                        this._changeActiveLink(i);
                    }
                },
                offset: this.scrollDownOffset
            }
            new Waypoint(downConfig);
            /*Set waypoint for scrolling up*/
            let upConfig = {
                element: this.pageSections[i],
                handler: (direction) => {
                    if(direction === "up"){
                        this._changeActiveLink(i);
                    }
                },
                offset: this.scrollUpOffset
            }
            new Waypoint(upConfig);
        });
    }

    _changeActiveLink(i){
        let anchorLinkSelector = this.pageSections[i].getAttribute(this.pageSectionAnchorAttr);
        this.headerLinks.removeClass(this.activeLinkClass);
        $(anchorLinkSelector).addClass(this.activeLinkClass);
    }

}



export default AnchorLinks;
