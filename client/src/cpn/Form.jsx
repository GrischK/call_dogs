import { useForm } from "react-hook-form";
import { postDog } from "../services/api.ts";
import { useEffect } from "react";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: null,
      age: null,
      breed: null,
      role: null,
    },
  });

  const onSubmit = async (data) => {
    const cleanData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        value === "" ? null : value,
      ]),
    );

    try {
      console.log(cleanData);
      const result = await postDog(cleanData);
      console.log("Dog created successfully:", result);
    } catch (error) {
      console.error("Error creating dog:", error);
    }
  };

  useEffect(() => {}, []);

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
