jQuery(function($) {

	var headerbox = $('input[name=head_checkbox]'),
		checkboxes = $('input[name=body_checkbox]')
		checkedcount = 0;

	var toolbar = $('.list-toolbar');


	// toggle checkboxes en masse

	headerbox.change(function() {
		checkboxes.each(function() {
			
			$(this).prop('checked', headerbox.prop('checked')).trigger('change');

			if (!$(this).prop('checked')) {
				checkedcount = 0; // reset to accomodate for inflated counts
			}
		});
	});


	// toggle single checkboxes and thus the manage bar
	
	checkboxes.each(function() {

		var $checkbox = $(this);

		$checkbox.change(function() {

			// highlight the checked row
			if ($checkbox.prop('checked')) {
				$checkbox.closest('tr').addClass('row-selected');
				checkedcount++;
			} else {
				$checkbox.closest('tr').removeClass('row-selected');
				checkedcount--;
			}

			// toggle the toolbar
			if (checkedcount > 0) {
				toolbar.addClass('rows-selected');
			} else {
				toolbar.removeClass('rows-selected');
			}

		});
	});


	// update items modal

	$('.update-field-row').hide();

	$('.update-field-select').find('a').each(function() {
		$(this).click(function() {
			$('.update-field-row').show().find('.field-label').html($(this).html());
			$(this).closest('.modal').find('.submit-button').removeAttr('disabled');
		});
	});

});