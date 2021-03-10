const arg = process.argv.slice(2);
let numbers = arg.filter(num => {
    return num > 0;
});

const timer = function() {
  for (const num of numbers) {
  
  setTimeout(() => {
    console.log("beep");
    process.stdout.write("\x07");
  }, num * 1000);
 }
};

timer(numbers);


//TEST
// node timer1.js 10 3 5 15 9
//This will make it beep at:
// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

//BEEP SOUND
//process.stdout.write('\x07');