const store = {};

module.exports = {
  FileSystem: {
    documentDirectory: 'filesystem/',
    getInfoAsync: async () => ({ exists: false }),
    readAsStringAsync: async path => store[path],
    writeAsStringAsync: async (path, contents) => {
      store[path] = contents;
    },
  },
};
