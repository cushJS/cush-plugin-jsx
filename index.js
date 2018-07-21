module.exports = function() {
  this.merge('exts', ['.jsx']);
  this.merge('sucrase.exts', {
    '.jsx': ['jsx']
  });
};
