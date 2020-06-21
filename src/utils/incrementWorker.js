export default () => {
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener("message", (e) => {
    if (!e) return;
    let score = e.data;
    let toAdd = 0;
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 100000; j++) {
        toAdd++;
      }
    }
    postMessage(score + toAdd);
  });
};
