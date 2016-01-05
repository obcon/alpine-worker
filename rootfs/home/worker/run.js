console.log("Hello Worker!");
var workingTime = Math.floor((Math.random() * 10) + 5);
console.log("Doing some work for " + workingTime + " seconds ...");
setTimeout(function(){
	console.log("[x] done!");
    }, workingTime * 1000);