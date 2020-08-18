class ProductSearchDTO {
  constructor ({
    id,
    name,
    category,
    price,
    base_price,
    discount_rate,
    sold_count,
    stock_count,
    coupang_product_id
  }) {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
    this.basePrice = base_price
    this.discountRate = discount_rate
    this.soldCount = sold_count
    this.stockCount = stock_count
    this.coupangProductId = coupang_product_id
  }
}

module.exports = ProductSearchDTO