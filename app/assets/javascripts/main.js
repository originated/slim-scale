$(document).ready(function() {
	SlimScale = {
		init:function(){
			var self = this;
			self.trackWeightButton();
		},
		trackWeightButton: function(){
			$('#track-weight').click(function(){
				$.ajax({
	                url:'/mike_controller',
	                dataType: 'json',
	                type: 'get',
	                success:function (resArr) {
	                    // convert response string to array, merge with billBoards arr, then pass to callback
	                },
					error: function(res){
						console.log('boohooo! ajax error');
					}
	            });
			});
		}
	}

	SlimScale.init();
});

