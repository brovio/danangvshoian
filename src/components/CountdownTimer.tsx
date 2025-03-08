
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  title: string;
}

export const CountdownTimer = ({ targetDate, title }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = Number(targetDate) - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatValue = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-background/80 backdrop-blur-md shadow-md rounded-lg overflow-hidden border border-border/50 animate-fade-in">
      <div className="flex flex-col p-3 w-[200px]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">{title}</span>
          <Clock size={14} className="text-primary animate-pulse-subtle" />
        </div>
        <div className="grid grid-cols-4 gap-1 text-center">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">{formatValue(timeLeft.days)}</span>
            <span className="text-[10px] text-muted-foreground uppercase">days</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">{formatValue(timeLeft.hours)}</span>
            <span className="text-[10px] text-muted-foreground uppercase">hrs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">{formatValue(timeLeft.minutes)}</span>
            <span className="text-[10px] text-muted-foreground uppercase">min</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">{formatValue(timeLeft.seconds)}</span>
            <span className="text-[10px] text-muted-foreground uppercase">sec</span>
          </div>
        </div>
        <div className="h-1 w-full bg-muted mt-2 rounded overflow-hidden">
          <div className="h-full bg-primary rounded animate-count-down origin-left" style={{width: "100%"}}></div>
        </div>
      </div>
    </div>
  );
};
