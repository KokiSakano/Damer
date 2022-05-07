const path = require('path');

const buildEslintCommand = (files) => `next lint --fix --file ${files}`;

const buildPrettierCommand = (files) => `prettier --write ${files}`;

const buildCommand = (filenames) => {
  const files = filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ');

  return [buildEslintCommand(files), buildPrettierCommand(files)];
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildCommand],
};
