// $('#evan1').accordion(); // this is default system
$( function() {
	var icons1 = {
	  // header: "ui-icon-circlesmall-plus",
	  // activeHeader: "ui-icon-circlesmall-minus"
	  // header: "ui-icon-squaresmall-plus",
	  // activeHeader: "ui-icon-squaresmall-minus"
	  // header: "ui-icon-circle-plus",
	  // activeHeader: "ui-icon-circle-minus"
	  // header: "ui-icon-circle-arrow-e",
	  // activeHeader: "ui-icon-circle-arrow-s"
	  // header: "ui-icon-circle-triangle-e",
	  // activeHeader: "ui-icon-circle-triangle-s"
	  // header: "ui-icon-locked",
	  // activeHeader: "ui-icon-unlocked"
	  // header: "ui-icon-plusthick",
	  // activeHeader: "ui-icon-minusthick"
	  header: "ui-icon-plus",
	  activeHeader: "ui-icon-minus"
	};
	
	// for collapse and content height
	$( "#evan1" ).accordion({
	  icons: icons1,
	  collapsible: true,
	  heightStyle: "content"
	});
	
	var icons2 = {
	  // header: "ui-icon-circlesmall-plus",
	  // activeHeader: "ui-icon-circlesmall-minus"
	  // header: "ui-icon-squaresmall-plus",
	  // activeHeader: "ui-icon-squaresmall-minus"
	  header: "ui-icon-circle-plus",
	  activeHeader: "ui-icon-circle-minus"
	  // header: "ui-icon-circle-arrow-e",
	  // activeHeader: "ui-icon-circle-arrow-s"
	  // header: "ui-icon-circle-triangle-e",
	  // activeHeader: "ui-icon-circle-triangle-s"
	  // header: "ui-icon-locked",
	  // activeHeader: "ui-icon-unlocked"
	  // header: "ui-icon-plusthick",
	  // activeHeader: "ui-icon-minusthick"
	  // header: "ui-icon-plus",
	  // activeHeader: "ui-icon-minus"
	};
	
	// for collapse and content height
	$( "#evan2" ).accordion({
	  icons: icons2,
	  collapsible: true,
	  heightStyle: "content"
	});
	
	// // for icons 1
	// $( "#toggle" ).button().on( "click", function() {
	  // if ( $( "#evan1" ).accordion( "option", "icons" ) ) {
		// $( "#evan1" ).accordion( "option", "icons", null );
	  // } else {
		// $( "#evan1" ).accordion( "option", "icons", icons );
	  // }
	// });
	// // for icons 2
	// $( "#toggle" ).button().on( "click", function() {
	  // if ( $( "#evan3" ).accordion( "option", "icons" ) ) {
		// $( "#evan3" ).accordion( "option", "icons", null );
	  // } else {
		// $( "#evan3" ).accordion( "option", "icons", icons );
	  // }
	// });
	
	// for tabs
	$('.evan3').tabs({
		active: 0
	}); // this is default system
	
	// for sortable tabs
	var tabs = $( ".evan4" ).tabs();
	tabs.find( ".ui-tabs-nav" ).sortable({
	  axis: "x",
	  stop: function() {
		tabs.tabs( "refresh" );
	  }
	});
	
	// for mouse over tabs
	$('.evan4').tabs({
		event: "mouseover",
		active: 0
	});
	
	// for date picker
	$('.a').datepicker();
	
	// for sortable dialog
	$( "#dialog" ).dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 1000
		},
		hide: {
		effect: "explode",
			duration: 1000
		}
	});
	$( "#opener" ).on( "click", function() {
	$( "#dialog" ).dialog( "open" );
	});
});