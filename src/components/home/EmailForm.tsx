import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { forwardRef } from "react";
import { db } from "@/supabase";
import { useMutation } from "@tanstack/react-query";
import { ReloadIcon } from "@radix-ui/react-icons";
import { queryKeys } from "@/lib/consts";

const formSchema = z.object({
  full_name: z.string().min(3),
  phone_number: z.string().min(1),
  email: z.string().email(),
});

export const EmailForm = forwardRef((_, ref) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { isPending, mutateAsync: handleInsertEmail } = useMutation({
    mutationKey: [queryKeys.waitingList],
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const { error } = await db.from("waiting_list").insert(values);
      if (error) {
        const errorMessage =
          Number(error.code) === 23505 // duplicate key
            ? "Email already exists"
            : "There was an error while submitting your request. Please try again later.";
        return toast({
          title: "Sign Up Error",
          description: errorMessage,
          variant: "destructive",
        });
      }
      toast({
        title: "Sign Up Success",
        description: (
          <div>
            Welcome aboard "{values["full_name"]}"! <br />
            You will be contacted soon at - {values.email}
          </div>
        ),
        variant: "success",
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    handleInsertEmail(values);
  }

  return (
    <p className="flex flex-col gap-24 text-center">
      <div>
        <h2 className="text-blue-500">Contact Us</h2>
        <h4>
          Contact us to Join our journey of changing the way look at clouds
        </h4>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex lg:flex-row flex-col justify-between gap-4"
        >
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Full name"
                    type="text"
                    {...field}
                    ref={ref as React.LegacyRef<HTMLInputElement>}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Phone number" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="flex-1" type="submit">
            {isPending ? (
              <ReloadIcon className="mr-2 w-4 h-4 animate-spin" />
            ) : (
              "Send"
            )}
          </Button>
        </form>
      </Form>
    </p>
  );
});
