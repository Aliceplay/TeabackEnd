import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputArea = () => {
  return (
    <div className="grid w-full max-w-md items-center gap-1.5">
      <Label htmlFor="date">拍攝日期</Label>
      <Input type="text" id="date" placeholder="0000-00-00" />
      <Label htmlFor="weather">拍攝天氣</Label>
      <Input type="text" id="weather" placeholder="晴陰雨" />
      <Label htmlFor="growth">生長率</Label>
      <Input type="text" id="growth" placeholder="00.00%" />
      <Label htmlFor="plantingRate">生長情形</Label>
      <Input type="text" id="plantingRate" placeholder="高中低" />
    </div>
  );
};
export default InputArea;
