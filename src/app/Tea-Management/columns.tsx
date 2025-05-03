"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// They define the data that will be displayed,
//  how it will be formatted, sorted and filtered.
export type TeaData = {
  teaGardenName: string;
  teaGardenLocation: string;
  area: string;
  originalImage: string;
  analyzedImage: string;
  date: string;
  weather: string;
  growth: string;
  plantingRate: string;
};

export const columns: ColumnDef<TeaData>[] = [
  {
    accessorKey: "teaGardenName",
    header: () => <span className="text-xl font-bold">茶園名稱</span>,
  },
  {
    accessorKey: "teaGardenLocation",
    header: () => <span className="text-xl font-bold">茶園位置</span>,
  },
  {
    accessorKey: "area",
    header: () => <span className="text-xl font-bold">區域</span>,
  },
  {
    accessorKey: "originalImage",
    header: () => <span className="text-xl font-bold">原始圖片</span>,
    cell: ({ row }) => (
      <img
        src={row.original.originalImage}
        alt="原始圖片"
        className="h-16 w-24 object-cover rounded"
      />
    ),
  },
  {
    accessorKey: "analyzedImage",
    header: () => <span className="text-xl font-bold">分析後圖片</span>,
    cell: ({ row }) => (
      <img
        src={row.original.analyzedImage}
        alt="分析後圖片"
        className="h-16 w-24 object-cover rounded"
      />
    ),
  },
  {
    accessorKey: "date",
    header: () => <span className="text-xl font-bold">日期</span>,
  },
  {
    accessorKey: "weather",
    header: () => <span className="text-xl font-bold">天氣</span>,
  },
  {
    accessorKey: "growth",
    header: () => <span className="text-xl font-bold">成長率</span>,
  },
  {
    accessorKey: "plantingRate",
    header: () => <span className="text-xl font-bold">種植程度</span>,
  },
];
