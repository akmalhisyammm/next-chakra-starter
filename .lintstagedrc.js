module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': ['eslint --fix --max-warnings=0', 'prettier -w'],
  'src/**/*.{json,css,scss,md}': ['prettier -w'],
};
