module.exports = {
    ci: {
      collect: {
        staticDistDir: './',
        url: [
          'http://localhost/langevin-school.html',
          'http://localhost/house-that-foster-built.html',
        ],
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };