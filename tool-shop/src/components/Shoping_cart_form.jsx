import { useForm } from "react-hook-form";
import "./components-styles/Shoping_cart_form.css";

function Shoping_cart_form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="shoping-cart-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="order-details">
        <h2>Order details</h2>
        <p>2 items</p>
        <div className="order-details-sum">
          <p>Total</p>
          <h2 className="order-total">300$</h2>
        </div>
      </div>
      <div className="order-form-inputs">
        <input {...register("Name")} placeholder="Name" />
        <input
          {...register("PhoneNumber", {
            required: true,
            pattern:
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          })}
          placeholder="Phone Number"
        />
        <input
          {...register("Email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          placeholder="Email"
        />
        <button type="submit">Order</button>
      </div>
    </form>
  );
}

export default Shoping_cart_form;
