
import React, { useState } from 'react';
import { format, addDays, getDay, isSameDay, startOfWeek } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const shortWeekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// Генерация случайных событий для демонстрации
const generateRandomEvents = () => {
  const events: Record<string, boolean> = {};
  const now = new Date();
  const startDay = startOfWeek(now, { weekStartsOn: 1 });
  
  for (let i = 0; i < 21; i++) {
    const day = addDays(startDay, i);
    const hasEvent = Math.random() > 0.5;
    if (hasEvent) {
      events[format(day, 'yyyy-MM-dd')] = true;
    }
  }
  
  return events;
};

const Calendar: React.FC<{
  onDateSelect: (date: Date) => void;
}> = ({ onDateSelect }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [events] = useState(generateRandomEvents());
  
  const startDate = startOfWeek(today, { weekStartsOn: 1 });
  const days = Array.from({ length: 21 }, (_, i) => addDays(startDate, i));
  
  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };
  
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Календарь занятий</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {shortWeekdays.map((day) => (
            <div 
              key={day} 
              className="text-center text-xs font-semibold text-muted-foreground py-1"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((date) => {
            const isToday = isSameDay(date, today);
            const isSelected = isSameDay(date, selectedDate);
            const hasEvents = events[format(date, 'yyyy-MM-dd')];
            
            return (
              <div
                key={date.toISOString()}
                className={cn(
                  "calendar-day text-center text-sm",
                  isToday && "today",
                  isSelected && "selected",
                  hasEvents && "has-events"
                )}
                onClick={() => handleDayClick(date)}
              >
                {format(date, 'd')}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-4 text-sm font-medium">
          {format(selectedDate, 'EEEE, d MMMM yyyy', { locale: ru })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calendar;
