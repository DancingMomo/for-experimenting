import $ from 'jquery';
// import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class ImageParallax {

    constructor(){
        this.scrollY;
        this._trackScroll();
        this.selector;
    }

    set(effectSelector, rate = 1){
        this.selector = effectSelector;
        /*NOTE: Be sure css is applied to the selector to make the moving item:
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        Remember: the parent must also have a position for this to function correctly!
        */
        let nodes = $(this.selector);
        for(let i=0; i < nodes.length; i++){
            this._applyParallaxEffect(nodes[i], rate);
        }
    }


    _applyParallaxEffect(node, rate){
        let nodeHalfHeight = node.height / 2;
        let wrapper = $(node).parent();
        let wrapperTopPos = wrapper.offset().top;
        let initPosition = -1 * nodeHalfHeight;
        node.style.transform = `translateY(${initPosition}px)`;
        $(document).on('scroll', () => {
            let parentPosition = wrapperTopPos - this.scrollY;
            let newPosition = -1 * (nodeHalfHeight + (parentPosition * rate));
            node.style.transform = `translateY(${newPosition}px)`;
        });
    }

    //private
    _trackScroll(){
        $(document).on('scroll', () => {
            this.scrollY = window.scrollY;
        });
    }



}

module.exports = ImageParallax;
