
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

interface CreditProgressBarProps {
  currentCredits: number;
  nextRewardAt: number;
  nextReward: string;
}

export const CreditProgressBar = ({ currentCredits, nextRewardAt, nextReward }: CreditProgressBarProps) => {
  const progressPercentage = (currentCredits / nextRewardAt) * 100;
  
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium">
          <span className="text-xl font-bold">{currentCredits}</span> Credits
        </div>
        <div className="flex items-center text-sm gap-1 text-muted-foreground">
          <Trophy className="w-4 h-4" />
          <span>Next: {nextReward} at {nextRewardAt} credits</span>
        </div>
      </div>
      <Progress value={progressPercentage} className="h-2" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>0</span>
        <span>{nextRewardAt}</span>
      </div>
    </div>
  );
};
