import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("name"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="name" {...register("name", { required: true })} />
      <input placeholder="age" {...register("age")} />
      <input placeholder="breed" {...register("breed")} />
      <input placeholder="role" {...register("role")} />
      {errors.name && <span>TName is required</span>}
      <input type="submit" />
    </form>
  );
}
