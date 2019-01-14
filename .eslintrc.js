module.exports = {
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/react',
    'prettier/standard'
  ],
  rules: {
    'react/prop-types': false,
    'react/react-in-jsx-scope': false
  },
  parser: 'babel-eslint'
}
