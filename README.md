async_mp.js
===========

A useful monkey patch for jQuery's $.post and $.get operations.

What does async_mp.js do?
-------------------------
* Calls a user-defined Fn when an async operation has started.
* Makes dev life somewhat saner...

Assumptions
-----------
async_mp.js currently supports the following code signatures:
* $.get(url).done(function(response) {//do something with 'response'});

* $.get(url, function(response) {//do something with 'response'});

* $.post(url, {foo: "bar"}).done(function(response) {//do something with 'response'});

* $.post(url, {foo: bar"}, function(response) {//do something with 'response'});

How do I use it?
----------------

Include the script, and--before the include--define at top level (window) two Fns:

   begin_async_op
	
   end_async_op
	
What about onError(), promise(), etc? I noticed async_mp.js doesn't handle those
--------------------------------------------------------------------------------

Submit an issue or PR and I'll gladly add support if someone requests it.

