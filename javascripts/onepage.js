
(function( $, window, document, undefined ){
	
	$.fn.OnePage = function( options ){

		var onepage = {
			init: function( options ){
				this.options = $.extend( {}, $.fn.OnePage.options, options );
				
				this.container = this.options.container;
				this.sections = this.container.find( this.options.sections );
				this.fixedHeader = this.options.fixedHeader;
				this.menu = this.options.menu;
				this.activeSection = this.sections.first().addClass('active');
				this.footerHeight = ( this.options.footerPositionFixed ) ? this.options.footer.height() : 0;
        				if ( this.footerHeight ) this.sections.last().css( 'padding-bottom', this.footerHeight );


				this.setSectionsHeight();

				this.events.clickNav();
			},

			setSectionsHeight: function(){
				this.wh = $( window ).height();

				// this.sections.css( 'min-height', this.wh - this.fixedHeader.height() - this.footerHeight );
				this.setContentInMiddle();
			},

			setContentInMiddle: function(){
				this.sections.each(function(){
					var marginTop = ( onepage.wh - onepage.fixedHeader.height() - onepage.footerHeight - $(this).find('.container').height() )/2;
					( marginTop >= 0 ) ? $(this).find('.container').css('margin-top', marginTop) : $(this).find('.container').css('margin-top', 10);
				});
				},

			events: {
				clickNav: function(){
					onepage.menu.on('click', 'a', function( e ){
						e.preventDefault();
						var sectionId = $( this ).attr( 'href' );

						onepage.activeSection.removeClass( 'active' );
						onepage.activeSection = $( sectionId ).addClass( 'active' );

						$(window).scrollTo( onepage.activeSection, 900 );
					});
				}
			}
		};

		onepage.init( options );

		$(window)
			.on('load', function(){onepage.setSectionsHeight(); })
			.on('resize', function(){onepage.setSectionsHeight(); $( window ).scrollTo( onepage.activeSection, 0 ); });

		return onepage.container;//?
	};

//Domyślne opcje
	$.fn.OnePage.options = {
		container: $(''),
		sections: $('.section'),
		// containerInSection: $('.container'),
		fixedHeader: $('.top-bar'),
		menu: $('.menu'),
		footer: $('footer'),
		footerPositionFixed: true
	};
  
})( jQuery, window, document );


	$.fn.OnePage();