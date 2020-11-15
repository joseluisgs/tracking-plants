// Lista de plugis a cargar
const plugins = [];

// quita los console output en el modo producción
if (process.env.VUE_APP_STAGE === 'production') {
  plugins.push('transform-remove-console');
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins,
};
