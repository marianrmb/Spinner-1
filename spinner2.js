const rotate = ["\r| ", "\r/  ", "\r- ", "\r\\ ", "\r/  ", "\r- ", "\r\\", "\r|"]
let delay = 0

for(const run of rotate) {
  setTimeout(() => {
    process.stdout.write(run)
  }, delay += 200)
}







// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// // ... fill in the rest yourself ...

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1500);
