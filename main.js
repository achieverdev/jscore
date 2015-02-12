$( document ).ready(function() {

	/*Function.method('curry', function ( ) {
		var args = arguments, that = this;
			return function ( ) {
			return that.apply(null, args.concat(arguments));
		};
	})

	var add1 = add.curry(1);
	document.writeln(add1(6));*/	
	/*Function.method('inherits', function (Parent) {
		this.prototype = new Parent( );
		return this;
	});*/

     // undefined value
     /*var abc;
     console.log(abc);*/
     
     // check object empty or not any property 
     var obj = {};

     // 1
     //console.log(jQuery.isEmptyObject(obj)); 
     
    // 2
	isEmpty_one(obj);
    function isEmpty_one(obj)
	{
	     if(typeof obj == 'object' && obj && !Object.keys(obj).length >0)
	     {
		  console.log('not empty')
	     }
	     else
	     {
		console.log('empty')
	     }
	}
   
    // 3
    /* 
    console.log(isEmpty(obj));
    function isEmpty(obj)
    {
	for (var key in obj)
	{
		if(o.hasOwnProperty(key))
		{
			console.log('not empty');
			return false;
		}
	}
	return true;
    }*/

});
