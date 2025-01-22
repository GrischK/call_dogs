import { useForm } from "react-hook-form";
import { postDog } from "../services/api.ts";

export default function Form({ updateDogsList }) {
  const rolesList = ["leader", "wheeler", "swing dog", "team dog"];

  const {
    register,
    handleSubmit,
    reset,
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
    const cleanData = {
      ...data,
      role: data.role ? [data.role] : [],
    };

    try {
      const result = await postDog(cleanData);
      reset({
        name: null,
        age: null,
        breed: null,
        role: null,
      });
      updateDogsList(result);
      console.log("Dog created successfully:", result);
    } catch (error) {
      console.error("Error creating dog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
      <input
        className={"bg-amber-50"}
        placeholder="name"
        {...register("name", { required: true })}
      />
      <input placeholder="age" {...register("age")} />
      <input placeholder="breed" {...register("breed")} />
      <select {...register("role")} multiple={true}>
        <option value="">Select a role</option>
        {rolesList.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      {errors.name && <span>TName is required</span>}
      <input type="submit" />
    </form>
  );
}
