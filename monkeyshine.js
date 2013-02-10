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

