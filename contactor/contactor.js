(function($) {
	Drupal.behaviors.contactor = {
  		attach: function (context, settings) {
            
            $('#modal-form').on('hidden.bs.modal', function () {
                $('#modal-form .ajax-target').replaceWith('<div class="ajax-target"><img  src="/sites/all/themes/lidpak/images/form_loader.gif"  width="50%"></div>');
                $('#modal-form .ajax-messages').replaceWith('<div class="ajax-messages"></div>');
            });
        }  
	}
})(jQuery);
