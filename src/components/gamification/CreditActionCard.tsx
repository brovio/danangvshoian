
import { CreditAction } from "@/types";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/CTAButton";

interface CreditActionCardProps {
  action: CreditAction;
  onClick?: () => void;
}

export const CreditActionCard = ({ action, onClick }: CreditActionCardProps) => {
  const isEarn = action.type === 'earn';
  
  return (
    <Card className={`h-full ${isEarn ? 'hover:border-green-400' : 'hover:border-blue-400'} transition-all`}>
      <CardHeader className="space-y-1 pb-2">
        <div className="flex justify-between items-center">
          <div className={`p-2 rounded-full ${isEarn ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
            {action.icon}
          </div>
          <div className="flex items-center gap-1 font-semibold text-lg">
            <span>{action.creditAmount}</span>
            <span className="text-sm">credits</span>
          </div>
        </div>
        <h3 className="font-bold text-lg">{action.title}</h3>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {action.description}
      </CardContent>
      <CardFooter>
        <CTAButton 
          className={`w-full ${isEarn ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`} 
          onClick={onClick}
        >
          {isEarn ? 'Earn Now' : 'Use Credits'}
        </CTAButton>
      </CardFooter>
    </Card>
  );
};
