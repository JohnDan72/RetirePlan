const { override, addLessLoader } = require('customize-cra');

module.exports = override(
    addLessLoader({
        // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#86E1E0',
                '@primary-color-dark': '#86E1E0',
                '@border-radius': '5px',
                '@green': '#81C657', //success
                '@blue': '#BEEEEC', //info
                '@yellow': '#F0C234', //warning
                '@red': '#d32f2f', //errors
            }
        }
    })
);