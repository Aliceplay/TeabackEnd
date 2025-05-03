import React from "react";
import { TeaData, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<TeaData[]> {
  const response = await fetch("http://localhost:3000/api/seed");
  const json: TeaData[] = await response.json();
  console.log(json);

  const flattenedData = json.flatMap((garden: any) =>
    garden.teaData.map((tea: any) => ({
      area: tea.area,
      originalImage: tea.originalImage,
      analyzedImage: tea.analyzedImage,
      date: tea.date,
      weather: tea.weather,
      growth: tea.growth,
      plantingRate: tea.plantingRate,
      teaGardenName: garden.teaGardenName,
      teaGardenLocation: garden.teaGardenLocation,
    }))
  );

  return flattenedData;
}

export default async function MamagementPage() {
  let data: TeaData[] = [];

  try {
    data = await getData();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="container mx-auto py-10">
      {data.length > 0 ? (
        <DataTable columns={columns} data={data} />
      ) : (
        <p className="text-center text-gray-500">無資料可顯示</p>
      )}
    </div>
  );
}
