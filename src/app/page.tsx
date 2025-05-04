"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { z } from "zod";
import { ImagePlus } from "lucide-react";
import { toast } from "sonner";
import { ImageUploader } from "@/components/uploadfile";
import { InstantTable } from "@/components/instantTable";
import InputArea from "@/components/Input-Areaimage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ImageUp } from "lucide-react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form } from "@/components/ui/form";

// interface TableData {
//   area: string;
//   date: string;
//   weather: string;
//   growth: string;
//   plantingRate: string;
// }

const sampleData = [
  {
    area: "A",
    date: "2025.04.25",
    weather: "陰",
    growth: "1.82%",
    plantingRate: "低",
  },
];

const Page: React.FC = () => {
  //drop
  const [selectedText, setSelectedText] = useState<string>("請選擇一個項目");

  const handleSelect = (value: string) => {
    setSelectedText(value);
  };

  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>("");

  const formSchema = z.object({
    image: z
      //其餘的驗證皆由 React Dropzone 處理
      .instanceof(File)
      .refine((file) => file.size !== 0, "您並未上傳圖片檔案"),
  });

  //form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      image: new File([""], "filename"),
    },
  });

  // const [data, setData] = useState<TableData[]>([]);
  // const [Tform, setTForm] = useState<TableData>({
  //   area: "",
  //   date: "",
  //   weather: "",
  //   growth: "",
  //   plantingRate: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTForm({ ...Tform, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setData([...data, Tform]); // 加入新數據
  //   setTForm({ area: "", date: "", weather: "", growth: "", plantingRate: "" }); // 清空輸入框
  // };
  const [isOpen, setIsOpen] = useState(false);
  const SHEET_SIDES = ["left"] as const;
  type SheetSide = (typeof SHEET_SIDES)[number];

  return (
    <div className="grid transition-all">
      <main className="flex flex-col items-center text-center gap-[30px] py-4 row-start-2 h-200 w-100%">
        {/* 全部面板 */}
        <ResizablePanelGroup
          direction="horizontal"
          className="rounded-lg border h-full "
        >
          {/* 左側面板 */}
          {/* drop */}
          <ResizablePanel >
            <div className="flex items-center justify-center mt-2 gap-4">
              <span className="mx-6 mt-1 text-3xl font-bold ">
                選擇茶園
              </span>
              <Select onValueChange={handleSelect}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="選擇要新增的茶園" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">綠山茶園</SelectItem>
                    <SelectItem value="2">春嶺茶園</SelectItem>
                    <SelectItem value="3">碧谷茶園</SelectItem>
                    <SelectItem value="4">翠溪茶園</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-6 mt-6 flex items-center justify-center w-full">
              {SHEET_SIDES.map((side) => (
                <Sheet key={side} open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="secondary"
                      onClick={() => setIsOpen(true)}
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="block rounded-lg text-lg max-w-sm "
                    >
                      AI標記種植程度低區域圖片上傳
                    </Button>
                  </SheetTrigger>
                  <SheetContent side={side}>
                    <SheetHeader>
                      <SheetTitle>AI標記種植程度低區域圖片上傳</SheetTitle>
                    </SheetHeader>
                    <div className="grid gap-4 py-4 flex items-center justify-center">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <ImageUp />
                        <Label htmlFor="name" className="text-right">
                          原始圖片
                        </Label>

                        <Input id="name" defaultValue="File" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <ImageUp />
                        <Label htmlFor="username" className="text-right">
                          已辨識圖片
                        </Label>
                        <Input
                          id="username"
                          defaultValue="File"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit">儲存</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              ))}
            </div>
            <div className="w-full flex gap-x-4 mt-6 px-4 py-4 items-center justify-center">
              <span className="mt-1 text-3xl font-bold">上傳區域圖片</span>
            </div>
            {/* form */}
            {/* <Form {...form}> */}
              <div className="flex gap-0.5 px-2 py-2 items-center justify-evenly">
              
                {/* A */}
                <ImageUploader title="A區圖片"></ImageUploader>
                {/* B */}
                <ImageUploader title="B區圖片"></ImageUploader>
                {/* C */}
                <ImageUploader title="C區圖片"></ImageUploader>
              </div>
            {/* </Form> */}

            

            

            <div className="w-full grid grid-col px-6 py-4 flex items-center justify-center gap-1.5">
              <InputArea></InputArea>
              <Button
                id="DataButton"
                type="submit"
                disabled={form.formState.isSubmitting}
                className="block rounded-lg px-4 py-1 text-lg"
              >
                確認新增
              </Button>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          {/* 中間分隔線 */}
          {/* 右側面板 */}
          {/* <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizableHandle />
              <div>
                <InstantTable data={sampleData}></InstantTable>
              </div>
            </ResizablePanelGroup>
          </ResizablePanel> */}
        </ResizablePanelGroup>
      </main>
    </div>
  );
};

export default Page;
