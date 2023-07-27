"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  phone: z
    .string()
    .regex(/^[0-9]*$/, { message: "Please insert a valid phone number" })
    .min(4, { message: "Phone should be at least 4 numbers" })
    .max(11, { message: "Phone should be less than 11 numbers" }),
  email: z.string().email({ message: "Insert a valid email" }),
  message: z.string(),
});

export function ContactForm() {
  // ...
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-4 space-y-3 md:mx-0 md:px-4 md:py-8 md:shadow-lg lg:mx-10 lg:rounded"
      >
        <FormDescription className="font-serif text-2xl text-pr-dark-green md:text-3xl">
          Schedule a Tour
        </FormDescription>
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="923 923 232" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="button-container my-8 flex flex-col items-center md:items-end md:py-4">
          <Button type="submit" className="md:text-xl">
            Schedule a Tour
          </Button>
        </div>
      </form>
    </Form>
  );
}
