function getElementWidth(content, padding, border) {
  const totalPrice =
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2;
  return totalPrice + 'px';
}
