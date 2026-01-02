export default {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, // 1rem = 16px
      propList: ["*"], // Конвертировать все свойства
      minPixelValue: 1, // Не конвертировать значения <= 1px
      exclude: /node_modules/i, // Игнорировать зависимости
    },
  },
};
