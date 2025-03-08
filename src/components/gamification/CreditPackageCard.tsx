
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/CTAButton";

interface CreditPackageProps {
  id: string;
  name: string;
  credits: number;
  price: string;
  popular: boolean;
  features: string[];
}

export const CreditPackageCard = ({ id, name, credits, price, popular, features }: CreditPackageProps) => {
  return (
    <Card className={`h-full relative ${popular ? 'border-purple-400 shadow-md' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center pt-8">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-3xl font-bold">{credits}</span>
          <span className="text-muted-foreground">credits</span>
        </div>
        <p className="text-2xl font-semibold">{price}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <CTAButton 
          className={`w-full ${popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
        >
          Buy Now
        </CTAButton>
      </CardFooter>
    </Card>
  );
};
