// Rotate page 180
['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	document.body.style[prefix + 'transform'] = 'rotate(180deg)';
});

// Flip images 180
['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){
		el.style[prefix + 'transform'] = 'rotate(180deg)';
	});
});

// Random orientations
['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){
		el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
	});
});

// Rotate page on mouse/key movement
setTimeout(function(){
	document.onmousemove = document.onkeypress = function(){
		['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
			document.body.style[prefix + 'transition'] = prefix + 'transform 3s';
			document.body.style[prefix + 'transform'] = 'rotate(180deg)';
		});
	}
}, 5000);

// Replace text entered by the user with the contents of the TEXT variable
(function(){
	var TEXT = 'i like frogs ';
	Array.prototype.slice.call(document.querySelectorAll('input[type=text],textarea')).map(function(el){
		el.onkeypress=function(evt){
		    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
		    if (charCode && charCode > 31) {
		        var start = this.selectionStart, end = this.selectionEnd;
	            this.value = this.value.slice(0, start) + TEXT[start % TEXT.length] + this.value.slice(end);
	            this.selectionStart = this.selectionEnd = start + 1;
	        }
			return false;
		}
	});
}());