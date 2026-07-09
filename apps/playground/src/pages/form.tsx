import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

interface FormValues {
  username: string;
  email: string;
}

export function FormPage() {
  const form = useForm<FormValues>({
    defaultValues: { username: "", email: "" },
  });

  const onSubmit = (values: FormValues) => {
    toast.success(`Submitted: ${values.username}`);
  };

  return (
    <Page title="Form" description="React Hook Form integration with validation messages.">
      <Sample title="Basic form">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full max-w-sm flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="username"
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="kumix" {...field} />
                  </FormControl>
                  <FormDescription>Your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Sample>
    </Page>
  );
}
