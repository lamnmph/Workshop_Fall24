import { ImBin2 } from "react-icons/im";

const Shoppingcartpage = () => {
  return (
    <>
      <div className="container mx-auto p-10">
        <div className="cart-container">
          <div className="cart-items">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="product-info">
                      <img src="image/chair.png" alt="Asgaard sofa" />
                      <span>Asgaard sofa</span>
                    </div>
                  </td>
                  <td>25.000.000d</td>
                  <td>1</td>
                  <td>25.000.000d</td>
                  <td>
                    <button className="remove-item">
                      <i className="fas fa-trash">
                        <ImBin2 />
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-info">
                      <img src="image/sofa3.jpg" alt="Asgaard sofa" />
                      <span>Asgaard sofa</span>
                    </div>
                  </td>
                  <td>25.000.000d</td>
                  <td>1</td>
                  <td>25.000.000d</td>
                  <td>
                    <button className="remove-item">
                      <i className="fas fa-trash">
                        <ImBin2 />
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-info">
                      <img src="image/sofanow.jpg" alt="Asgaard sofa" />
                      <span>Asgaard sofa</span>
                    </div>
                  </td>
                  <td>25.000.000d</td>
                  <td>1</td>
                  <td>25.000.000d</td>
                  <td>
                    <button className="remove-item">
                      <i className="fas fa-trash">
                        <ImBin2 />
                      </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-info">
                      <img src="image/sofaoce.jpg" alt="Asgaard sofa" />
                      <span>Asgaard sofa</span>
                    </div>
                  </td>
                  <td>25.000.000d</td>
                  <td>1</td>
                  <td>25.000.000d</td>
                  <td>
                    <button className="remove-item">
                      <i className="fas fa-trash">
                        <ImBin2 />
                      </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart-total">
            <h3>Cart Total</h3>
            <div className="total-details">
              <p>
                Subtotal <span>100.000.000d</span>
              </p>
              <p>
                Total <span className="total-price">100.000.000d</span>
              </p>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shoppingcartpage;
