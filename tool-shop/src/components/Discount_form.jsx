import { useForm } from "react-hook-form";
import "./components-styles/Discount_form.css";

export default function Discount_form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="discount-form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name")} placeholder="Name" />
      <input
        {...register("PhoneNumber", {
          required: true,
          pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
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
      <button type="submit">Get a discount</button>
    </form>
  );
}
