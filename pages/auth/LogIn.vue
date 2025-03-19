<script setup lang="ts">
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import imageUrl from "@/assets/images/clock.png";

const email = ref("");
const password = ref("");

const schema = yup.object({
  Email: yup.string().required().email(),
  Password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

const onSubmit = () => {
  console.log("Login Data:", email.value, password.value);
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 shadow-lg rounded-lg w-96 m-4 sm:m-0">
      <ElementsAuthHeader title="Login" />

      <Form
        :validation-schema="schema"
        @submit="onSubmit"
        class="space-y-4 text-gray-600"
        v-slot="{ errors }"
      >
        <div>
          <label for="email" class="block text-sm font-medium">Email</label>
          <Field
            name="Email"
            v-model="email"
            type="email"
            class="mt-1 p-2 w-full border rounded-md"
          />
          <p class="text-red-500 text-xs sm:text-sm">{{ errors?.Email }}</p>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium"
            >Password</label
          >
          <Field
            name="Password"
            v-model="password"
            type="password"
            class="mt-1 p-2 w-full border rounded-md"
          />
          <p class="text-red-500 text-xs sm:text-sm">{{ errors?.Password }}</p>
        </div>

        <ElementsBtn title="Login"/>
      </Form>
    </div>
  </div>
</template>
