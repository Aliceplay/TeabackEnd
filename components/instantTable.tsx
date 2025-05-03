import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableData {
  area: string;
  date: string;
  weather: string;
  growth: string;
  plantingRate: string;
}

interface InstantTableProps {
  data: TableData[];
}

export const InstantTable: React.FC<InstantTableProps> = ({ data }) => {
  return (
    <div className="font-semibold mx-auto mt-2 max-w-[90%] text-center">
      <span className="mt-1 text-3xl font-bold">預覽資料</span>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] font-bold">區域</TableHead>
            <TableHead className="font-bold">A區圖片</TableHead>
            <TableHead className="font-bold">B區圖片</TableHead>
            <TableHead className="font-bold">C區圖片</TableHead>
            <TableHead className="font-bold">拍攝日期</TableHead>
            <TableHead className="font-bold">拍攝天氣</TableHead>
            <TableHead className="font-bold">生長率</TableHead>
            <TableHead className="font-bold">種植程度</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-normal text-center">
                {row.area}
              </TableCell>
              <TableCell className="font-normal text-left">A區圖片</TableCell>
              <TableCell className="font-normal text-left">B區圖片</TableCell>
              <TableCell className="font-normal text-left">C區圖片</TableCell>
              <TableCell className="font-normal text-left">
                {row.date}
              </TableCell>
              <TableCell className="font-normal text-left">
                {row.weather}
              </TableCell>
              <TableCell className="font-normal text-left">
                {row.growth}
              </TableCell>
              <TableCell className="font-normal text-left">
                {row.plantingRate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default InstantTable;
