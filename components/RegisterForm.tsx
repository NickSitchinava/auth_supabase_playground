"use client"

import { useForm } from "react-hook-form"
import { supabase } from "@/lib/auth"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch("password")

  const onSubmit = async (data: any) => {
    const { email, password, firstName, lastName } = data

    const { data: userData, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      return
    }

    if (userData.user) {
      await supabase.from("profiles").insert({
        id: userData.user.id,
        first_name: firstName,
        last_name: lastName,
        email,
      })

      router.push("/dashboard")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input"
        placeholder="First Name"
        {...register("firstName", { required: "Required" })}
      />
      {errors.firstName && <p>{errors.firstName.message as string}</p>}

      <input
        className="input"
        placeholder="Last Name"
        {...register("lastName", { required: "Required" })}
      />
      {errors.lastName && <p>{errors.lastName.message as string}</p>}

      <input
        className="input"
        placeholder="Email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message as string}</p>}

      <input
        type="password"
        className="input"
        placeholder="Password"
        {...register("password", {
          required: "Required",
          minLength: {
            value: 6,
            message: "Min 6 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message as string}</p>}

      <input
        type="password"
        className="input"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: "Required",
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && (
        <p>{errors.confirmPassword.message as string}</p>
      )}

      <button className="btn">Register</button>
    </form>
  )
}