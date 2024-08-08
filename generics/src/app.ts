const names: Array<string> = []; //same as string[]
// names[0].split(' '); we can call operations since we know it's a string

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});
