type CartHeaderProps = {
  totalCount: number;
  setPopup: (value: boolean) => void;
};
const CartHeader = ({ totalCount, setPopup }: CartHeaderProps) => {
  const oneItem = totalCount % 10 === 1 && totalCount % 100 !== 11;
  const someItems =
    totalCount % 10 >= 2 &&
    totalCount % 10 <= 4 &&
    (totalCount % 100 < 12 || totalCount % 100 > 14);
  return (
    <div className='cart__header'>
      <h1 className='cart__title'>
        Корзина:
        <span>
          {` ${totalCount}`}
          {oneItem ? ' товар' : someItems ? ' товара' : ' товаров'}
        </span>
      </h1>
      <button onClick={() => setPopup(true)} className='cart__clear'>
        Удалить все товары
      </button>
    </div>
  );
};

export default CartHeader;
