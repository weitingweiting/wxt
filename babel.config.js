module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.25.5'
      }
    ]
  ],
  plugins: ['@vue/babel-plugin-jsx']
}
