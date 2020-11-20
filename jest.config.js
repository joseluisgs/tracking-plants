module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // Esto es porque usamos v- click outside
  // https://forum.vuejs.org/t/custom-directive-in-vue-test-utils/64986
  setupFiles: ['<rootDir>/tests/setup.js'],
};
