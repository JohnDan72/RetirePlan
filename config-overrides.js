const { override, addLessLoader } = require('customize-cra');

module.exports = override(
    addLessLoader({
        // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#0F3759',
                '@primary-color-dark': '#0F3759',
                '@border-radius': '5px',
                '@green': '#43a047', //success
                '@blue': '#1e88e5', //info
                '@yellow': '#fdd835', //warning
                '@red': '#d32f2f', //errors
            }
        }
    })
);