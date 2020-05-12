$(document).ready(function(){ 

	$("#Carousel1"). carousel('pause');
	$("#Carousel2"). carousel('pause');
	$("#Carousel2-1"). carousel('pause');
	$("#Carousel3"). carousel('pause');

    // dark mode //
	let dark = localStorage.getItem('dark');

	const darkToggle = document.querySelector('#checkbox');

	const enableDark = () => {
		// add darkmode class to the body
		document.body.classList.add('dark');
		// update darkmode in local storage
		localStorage.setItem('dark','enabled')
	};

	const disableDark = () => {
		// add darkmode class to the body
		document.body.classList.remove('dark');
		// update darkmode in local storage
		localStorage.setItem('dark',null)
	};

	if (dark == 'enabled') {
		enableDark();
	};

	darkToggle.addEventListener("click", () => {
		dark = localStorage.getItem('dark');
		if (dark !== 'enabled') {
			enableDark();
		} else {
			disableDark();
		}
	});

	function swapStyleSheet(sheet){
	  document.getElementById('checkbox').setAttribute('href', sheet);
	  localStorage.setItem("sheet", sheet);
	}

	// scrollspy //
	window.onload = _ =>
	 swapStyleSheet(
	  localStorage.getItem("sheet") || "default.css"
	 );

	$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id 		= $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
});

}); //document boiler plate end