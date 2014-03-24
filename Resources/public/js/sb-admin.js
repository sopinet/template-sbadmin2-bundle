$(function() {

		// Datepicker for input type 
		 $('.inputDate').datepicker({
			 language:"es"
		 });
		 
		 // Listing matches countries while typing
		    var config = {
		    	      '.chosen-select'           : {},
		    	      '.chosen-select-deselect'  : {allow_single_deselect:true},
		    	      '.chosen-select-no-single' : {disable_search_threshold:10},
		    	      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
		    	      '.chosen-select-width'     : {width:"95%"}
		    	    }
		    	    for (var selector in config) {
		    	      $(selector).chosen(config[selector]);
		    	    }
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
$(function() {
    $(window).bind("load resize", function() {
        console.log($(this).width())
        if ($(this).width() < 768) {
            $('div.sidebar-collapse').addClass('collapse')
        } else {
            $('div.sidebar-collapse').removeClass('collapse')
        }
    })
})
