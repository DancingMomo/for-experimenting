const $ = require('jquery');
// import MenuManager from './managers/MenuManager.class';
import ImageParallax from './modules/ImageParallax.class';

var windowScrollTop = 0;

// let mainMenu = new MenuManager();
// mainMenu.execute()

var imgParallax = new ImageParallax();
imgParallax.set('.add-parallax', .1);



// let rate = .1;
// let nodes = $('.add-parallax');
// for (let i = 0; i < nodes.length; i++) {
//     let node = nodes[i];
//     let nodeHalfHeight = node.height / 2;
//     let wrapper = $(node).parent();
//     // let wrpperHalfHeight = wrapper.height / 2;
//     let wrapperTopPos = wrapper.offset().top;
//     node.style.transform = `translateY(-${nodeHalfHeight}px)`;

	$(document).on('scroll', () => {
        windowScrollTop = window.scrollY;

        // console.log(windowScrollTop);

        if(windowScrollTop > 10) {
            $('.banner').addClass('banner--travel');
        }else{
            $('.banner').removeClass('banner--travel');
        }
        //
        //
        // let parentPosition = wrapperTopPos - windowScrollTop;
		// let newPosition = -(nodeHalfHeight + (parentPosition * rate));
		// node.style.transform = `translateY(${newPosition}px)`;
	});
// }



// import './modules/test.js';
// import ImageParallax from './modules/ImageParallax.class';
//
//
// var imgParallax = new ImageParallax();
// imgParallax.execute(.15);
