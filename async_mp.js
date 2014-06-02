function async_mp()
{
	var original_get = $.get;
	var original_post = $.post;
	var patched_get;
	var patched_post;

	if( (typeof(window.begin_async_op) + '').toLowerCase() !== "function" ||
	    (typeof(window.end_async_op) + '').toLowerCase() !== "function")
	{
		window.begin_async_op = function()
		{
			console.log("begin_async_op Fn not implemented...");
		}
		window.end_async_op = function()
		{
			console.log("end_async_op Fn not implemented...");
		};
	}
	patched_get = function(a, b, c, d)
	{
		if((typeof(b) + '').toLowerCase() === "function")
		{
			var bb = b;
			b = function(arg)
			{
				end_async_op();
				bb(arg);
			};
		}
		begin_async_op();
		var x = original_get(a, b, c, d);
		var original_done = x.done;
		x.done = function(fn)
		{
			var old_fn = fn;
			fn = function(arg)
			{
				end_async_op();
				old_fn(arg);
			};
			original_done(fn);
		};
		return x;
	};

	patched_post = function(a, b, c, d)
	{
		if((typeof(c) + '').toLowerCase() === "function")
		{
			var cc = c;
			c = function(arg)
			{
				end_async_op();
				cc(arg);
			};
		}
		begin_async_op();
		var x = original_post(a, b, c, d);
						
		var original_done = x.done;
		x.done = function(fn)
		{
			var old_fn = fn;
			fn = function(arg)
			{
				end_async_op();
				old_fn(arg);
			};
			original_done(fn);
		};
		return x;
	};
	$.get = patched_get;
	$.post = patched_post;
}