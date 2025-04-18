import { useForm } from "react-hook-form";
import { postDog } from "../services/api.js";
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex flex-col gap-3 w-1/2"}
    >
      <input
        className={"border-2 rounded p-1"}
        placeholder="name"
        {...register("name", { required: true })}
      />
      <input
        className={"border-2 rounded p-1"}
        placeholder="age"
        {...register("age")}
      />
      <input
        className={"border-2 rounded p-1"}
        placeholder="breed"
        {...register("breed")}
      />

      {/* Multiple select for roles */}
      <select
        className={"border-2 rounded p-1"}
        {...register("role")}
        multiple={true}
      >
        <option value="">Select roles</option>
        {rolesList.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      {errors.name && <span>Name is required</span>}
      <input className={"bg-blue-600 text-white rounded p-1"} type="submit" />
    </form>
  );
}
