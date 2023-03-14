

const ItemCount = ({count, setCount}) => {

    const onAdd = () => {
      setCount(count + 1);
    };
    const restar = () => {
      if (count === 0) {
        return;
    }
    setCount(count - 1);
  };

  return ( 
    <div className="counter-container">
      <div className="quantity"><span>quantity</span><span> {count}</span></div>
      <div className="more"  onClick={onAdd}>+</div>
      <div className="less" onClick={restar}>-</div>
  </div>
  );

};

export default ItemCount