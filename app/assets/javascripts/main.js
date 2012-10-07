$(document).ready(function() {
	SlimScale = {
		init:function(){
			var self = this;
			self.trackWeightButton();
		},
		trackWeightButton: function(){
			$('#track-weight').click(function(){
				var pinger = setInterval(function(){
					$.ajax({
						url:'/lookup',
						dataType: 'json',
						type: 'get',
						success:function (res) {
							if(true){
								console.log('ya');
							} else {
								clearInterval(pinger);
							}
						},
						error: function(res){
							console.log('boohooo! ajax error');
						}
					});
				},1000)
			});
		}
	}

	SlimScale.init();
});

