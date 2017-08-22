module.exports = function() {
  var config = {
    allTs: './app/**/*.ts',
    typings: './typings/**/*.d.ts',
    tsOutPath: './dist/'
  }

  return config;
}