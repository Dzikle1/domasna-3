// const writeFile = () => {
// //   pending, fullfilled, rejected
//   return new Promise((resolve, reject) => {
//     fs.writeFile("data.txt", "TEST", (err) => {Add commentMore actions
//       if (err) {
//         reject(err);
//       }
//       if(err) reject(err);
//       if(err)
//           reject(err);

//       resolve();
//     });
//   });
// };


const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

readFile("test.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

writeFile("test.txt", "TEST FILE")
  .then((res) => console.log("Success!"))
  .catch((err) => console.log(err));