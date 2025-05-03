"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"



const Page: React.FC = () => {
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>("");

  const formSchema = z.object({
    image: z
      //Rest of validations done via react dropzone
      .instanceof(File)
      .refine((file) => file.size !== 0, "您並未上傳圖片檔案"),
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
    [form],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success(`圖片上傳成功 🎉 ${values.image.name}`);
  };

  return (
    <div className="grid  transition-all font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center py-4 row-start-2 h-[600px] w-full">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel className="rounded-lg border grid place-items-center">
          <h1 className="font-semibold text-4xl">AI標記種植程度低區域圖片上傳</h1>
      <Form {...form}>
              <div className="flex flex-row space-x-5">
              {/* 原始圖片 */}
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                {/*Form*/}
                <FormField
                  control={form.control}
                  name="image"
                  render={() => (
                    <FormItem className="max:w-1/2">
                      <FormLabel>
                            <h2 className="text-xl">請上傳原始圖片</h2>
                      </FormLabel>
                      <FormControl>
                        <div
                          {...getRootProps()}
                          className="flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-4 shadow-sm shadow-foreground"
                        >
                          {preview && (
                            <img
                              src={preview as string}
                              alt="Uploaded image"
                              className="max-h-[200px] rounded-lg w-20"
                            />
                          )}
                          <ImagePlus
                            className={`size-20 ${preview ? "hidden" : "block"}`}
                          />
                          <Input {...getInputProps()} type="file" />
                          {isDragActive ? (
                            <p>拖移圖片!</p>
                          ) : (
                            <p>點擊或拖移圖片</p>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage>
                        {fileRejections.length !== 0 && (
                          <p>
                            無效的圖片檔案，請上傳低於 1MB <br/>
                            且格式為 PNG / JPG / JPEG。
                          </p>
                        )}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </form>
              {/* 已辨識圖片 */}
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                {/*Form*/}
                <FormField
                  control={form.control}
                  name="image"
                  render={() => (
                    <FormItem className="max:w-1/2">
                      <FormLabel>
                            <h2 className="text-xl">請上傳已辨識圖片</h2>
                      </FormLabel>
                      <FormControl>
                        <div
                          {...getRootProps()}
                          className="flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-4 shadow-sm shadow-foreground"
                        >
                          {preview && (
                            <img
                              src={preview as string}
                              alt="Uploaded image"
                              className="max-h-[200px] rounded-lg w-20"
                            />
                          )}
                          <ImagePlus
                            className={`size-20 ${preview ? "hidden" : "block"}`}
                          />
                          <Input {...getInputProps()} type="file" />
                          {isDragActive ? (
                            <p>拖移圖片!</p>
                          ) : (
                            <p>點擊或拖移圖片</p>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage>
                        {fileRejections.length !== 0 && (
                          <p>
                            無效的圖片檔案，請上傳低於 1MB <br/>
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
            </ResizablePanel>
        </ResizablePanelGroup>
    </main>
    </div>
    
  );
};
export default Page;