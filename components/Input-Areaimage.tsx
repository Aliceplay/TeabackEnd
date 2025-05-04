import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputArea = () => {
  return (
    <div className="grid grid-cols-2 place-items-center w-full gap-6">
      <div className="">
        <Label htmlFor="date" className=" text-xl justify-center my-2">
          拍攝日期
        </Label>
        <Input type="text" id="date" placeholder="2025-00-00" />
        <Label htmlFor="weather" className=" text-xl justify-center my-2">
          拍攝天氣
        </Label>
        <Input type="text" id="weather" placeholder="晴 / 陰 / 雨" />
      </div>
      <div className="md-4">
        <Label htmlFor="growth" className=" text-xl  justify-center my-2">
          生長率
        </Label>
        <Input type="text" id="growth" placeholder="00.00%" />
        <Label htmlFor="plantingRate" className=" text-xl  justify-center my-2">
          生長情形
        </Label>
        <Input type="text" id="plantingRate" placeholder="高 / 中 / 低" />
      </div>
    </div>
  );
};
export default InputArea;
