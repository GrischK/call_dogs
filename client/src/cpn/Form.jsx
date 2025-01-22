import { useForm } from "react-hook-form";
import { postDog } from "../services/api.ts";
import { useEffect } from "react";

export default function Form({ updateDogsList }) {
  const rolesList = ["leader", "wheeler", "swing dog", "team dog"];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: null,
      age: null,
      breed: null,
      role: [],
    },
  });

  useEffect(() => {
    console.log("Selected roles:", watch("role"));
  }, [watch("role")]);

  const onSubmit = async (data) => {
    const cleanData = {
      ...data,
      role: data.role ? data.role : [], // Ensure roles are sent as an array
    };

    console.log("Clean data on submit:", cleanData);

    try {
      const result = await postDog(cleanData);
      reset({
        name: null,
        age: null,
        breed: null,
        role: [],
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

      {/* Multiple select for roles */}
      <select {...register("role")} multiple={true}>
        <option value="">Select roles</option>
        {rolesList.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      {errors.name && <span>Name is required</span>}
      <input type="submit" />
    </form>
  );
}
