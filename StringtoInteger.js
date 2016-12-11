process.stdout.write("Input something....");
process.stdin.on('data',(input)=>{
	input=input.toString().trim();
	// var result=Math.max(Math.min(parseInt(input) || 0, 2147483647), -2147483648);
	var result=parseInt(input);
	// process.stdout.write(result);
	console.log(result);
});
