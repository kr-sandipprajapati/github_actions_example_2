module.exports = {
  sayHello: function () {
    return 'Hello'
  },
  addNumbers: function (v1, v2) {
    return v1 + v2
  },
  arrayNum: [1, 2, 3],
  fn: async x => {
    return new Promise(resolve => {
      setTimeout(resolve, 3000, 2 * x);
    });
  },

}
