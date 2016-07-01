async_mp.js
===========

A useful monkey patch for jQuery's $.post and $.get operations.

What does async_mp.js do?
-------------------------
* Calls a user-defined Fn when an async operation has started and completed.
* Intended for cases when there are lots of existing $.get or $.post operations, and it’s not manageable to bring in an $.ajax setup.

Assumptions
-----------
async_mp.js currently supports the following code signatures:

<pre>
	$.get(url).done(function(response)
	{
		//do something with 'response'
	});
</pre>
<pre>
	$.get(url, function(response)
	{
		//do something with 'response'
	});
</pre>
<pre>
	$.post(url, {foo: "bar"}).done(function(response)
	{
		//do something with 'response'}
	);
</pre>
<pre>
	$.post(url, {foo: bar"}, function(response)
	{
		//do something with 'response'}
	);
</pre>

How do I use it?
----------------

Include the script **AFTER** jQuery, and define at top level (window) two Fns:

   begin_async_op
	
   end_async_op

Ex:

<pre>
	function begin_async_op()
	{
		$("#loading_div").css("display", "block");
	}
	function end_async_op()
	{
		#("#loading_div").css("display", "none");
	}
</pre>

After jQuery has finished loading , call async_mp() to get the patched versions of $.post and $.get.