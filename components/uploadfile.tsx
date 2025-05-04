"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { z } from "zod";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { ImagePlus } from "lucide-react";
import { toast } from "sonner";

interface ImageUploaderProps {
  title: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ title }) => {
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>("");

  const formSchema = z.object({
    image: z
      //Rest of validations done via react dropzone
      .instanceof(File)
      .refine((file) => file.size !== 0, "Please upload an image"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      image: new File([""], "filename"),
    },
  });

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("image", acceptedFiles[0]);
        form.clearErrors("image");
      } catch (error) {
        setPreview(null);
        form.resetField("image");
      }
    },
    [form]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 100000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success(`Image uploaded successfully 🎉 ${values.image.name}`);
  };

  return (
    <Form {...form}>
      <div className="flex flex-row items-center space-x-4">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center"
        >
          {/*Form*/}
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>
                  <h2 className="text-xl w-full">{title}</h2>
                </FormLabel>
                <FormControl>
                  <div
                    {...getRootProps()}
                    className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-foreground p-4 shadow-sm shadow-foreground"
                  >
                    {preview && (
                      <img
                        src={preview as string}
                        alt="Uploaded image"
                        className="max-h-[200px] rounded-lg w-20"
                      />
                    )}
                    <ImagePlus
                      className={` size-15 ${preview ? "hidden" : "block"} text-gray-700`}
                    />
                    <Input {...getInputProps()} type="file" />
                    {isDragActive ? <p>拖移圖片!</p> : <p></p>}
                  </div>
                </FormControl>
                <FormMessage>
                  {fileRejections.length !== 0 && (
                    <p>
                      無效的圖片檔案，請上傳低於 1MB <br />
                      且格式為 PNG / JPG / JPEG。
                    </p>
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
        </form>
      </div>
    </Form>
  );
};
