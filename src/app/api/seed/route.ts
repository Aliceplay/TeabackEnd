import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      "_id": "667d2ea239e6ec5af65427f3",
      "teaGardenID": 1,
      "teaGardenName": "綠山茶園",
      "teaGardenLocation": "新北市石碇區",
      "aiPlantingImages": {
        "original": "https://teaimages.blob.core.windows.net/tea-images/01_0505_original.jpg",
        "marked": "https://teaimages.blob.core.windows.net/tea-images/01_0505_marked.jpg",
        "_id": "667d2ea239e6ec5af65427f4"
      },
      "teaData": [
        {
          "area": "A",
          "originalImage": "https://teaimages.blob.core.windows.net/tea-images/1_0505_A_ori.png",
          "analyzedImage": "https://teaimages.blob.core.windows.net/tea-images/1_0505_A_ana.png",
          "date": "2025-04-25",
          "weather": "陰",
          "growth": "1.82%",
          "plantingRate": "低",
          "_id": "667d2ea239e6ec5af65427f5"
        },
        {
          "area": "B",
          "originalImage": "https://teaimages.blob.core.windows.net/tea-images/1_0505_B_ori.png",
          "analyzedImage": "https://teaimages.blob.core.windows.net/tea-images/1_0505_B_ana.png",
          "date": "2025-04-25",
          "weather": "陰",
          "growth": "0.10%",
          "plantingRate": "低",
          "_id": "667d2ea239e6ec5af65427f6"
        },
        {
          "area": "C",
          "originalImage": "https://teaimages.blob.core.windows.net/tea-images/1_0505_C_ori.png",
          "analyzedImage": "https://teaimages.blob.core.windows.net/tea-images/1_0505_C_ana.png",
          "date": "2025-04-25",
          "weather": "陰",
          "growth": "36.26%",
          "plantingRate": "中",
          "_id": "667d2ea239e6ec5af65427f7"
        }
      ],
      "__v": 0
    },
    {
      "aiPlantingImages": null,
      "_id": "667d2ea239e6ec5af65427f8",
      "teaGardenID": 1,
      "teaGardenName": "綠山茶園",
      "teaGardenLocation": "新北市石碇區",
      "teaData": [
        {
          "area": "A",
          "originalImage": "https://teaimages.blob.core.windows.net/tea-images/1_0526_A_ori.png",
          "analyzedImage": "https://teaimages.blob.core.windows.net/tea-images/1_0526_A_ana.png",
          "date": "2025-05-26",
          "weather": "晴",
          "growth": "5.22%",
          "plantingRate": "低",
          "_id": "667d2ea239e6ec5af65427fa"
        },
        {
          "area": "B",
          "originalImage": "https://teaimages.blob.core.windows.net/tea-images/1_0526_B_ori.png",
          "analyzedImage": "https://teaimages.blob.core.windows.net/tea-images/1_0526_B_ana.png",
          "date": "2025-05-26",
          "weather": "晴",
          "growth": "3.51%",
          "plantingRate": "低",
          "_id": "667d2ea239e6ec5af65427fb"
        },
        {
          "area": "C",
          "originalImage": "https://teaimages.blob.core.windows.net/tea-images/1_0526_C_ori.png",
          "analyzedImage": "https://teaimages.blob.core.windows.net/tea-images/1_0526_C_ana.png",
          "date": "2025-05-26",
          "weather": "晴",
          "growth": "41.80%",
          "plantingRate": "中",
          "_id": "667d2ea239e6ec5af65427fc"
        }
      ],
      "__v": 0
    },
    {
      "aiPlantingImages": null,
      "_id": "667d2ea239e6ec5af65427fd",
      "teaGardenID": 1,
      "teaGardenName": "綠山茶園",
      "teaGardenLocation": "新北市石碇區",
      "teaData": [
        {
          "area": "A",
          "originalImage": "https://teaimages.blob.core.windows.net/tea-images/1_0621_A_ori.png",
          "analyzedImage": "https://teaimages.blob.core.windows.net/tea-images/1_0621_A_ana.png",
          "date": "2025-06-21",
          "weather": "晴",
          "growth": "73.25%",
          "plantingRate": "高",
          "_id": "667d2ea239e6ec5af65427ff"
        },
        {
          "area": "B",
          "originalImage": "https://teaimages.blob.core.windows.net/tea-images/1_0621_B_ori.png",
          "analyzedImage": "https://teaimages.blob.core.windows.net/tea-images/1_0621_B_ana.png",
          "date": "2025-06-21",
          "weather": "晴",
          "growth": "27.72%",
          "plantingRate": "中",
          "_id": "667d2ea239e6ec5af6542800"
        },
        {
          "area": "C",
          "originalImage": "https://teaimages.blob.core.windows.net/tea-images/1_0621_C_ori.png",
          "analyzedImage": "https://teaimages.blob.core.windows.net/tea-images/1_0621_C_ana.png",
          "date": "2025-06-21",
          "weather": "晴",
          "growth": "82.18%",
          "plantingRate": "高",
          "_id": "667d2ea239e6ec5af6542801"
        }
      ],
      "__v": 0
    }
  ];
  return NextResponse.json(data);
}