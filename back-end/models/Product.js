const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false });

  return product;
};

module.exports = Product;