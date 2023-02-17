export const formatCoin = (money: number = 0) =>
  money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
