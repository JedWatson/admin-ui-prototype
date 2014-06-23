jQuery(function($) {

	//- generic confirm
	
	$('.js-confirm').click(function(e) {
		if ( !confirm( $(this).data('confirm') || 'Are you sure? This cannot be undone.') )
			return e.preventDefault();
	});
	
	// focus on the first modal field if there is one
	
	$('.modal').each(function() {
		
		var self = $(this);
		
		self.on('shown.bs.modal', function (e) {
			self.find('input[type!=hidden],textarea').eq(0).click().focus();
		});
	});
});