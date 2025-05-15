
import React from 'react';
import { format, isSameDay } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface ClassType {
  id: number;
  time: string;
  title: string;
  professor: string;
  location: string;
  type: 'лекция' | 'практика' | 'семинар' | 'лабораторная';
}

// Функция для генерации расписания на разные дни
const generateSchedule = (date: Date): ClassType[] => {
  const dayOfWeek = date.getDay(); // 0 - воскресенье, 1 - понедельник, и т.д.
  
  // Коллекция расписаний для разных дней недели
  const schedules: Record<number, ClassType[]> = {
    1: [ // Понедельник
      { id: 1, time: '9:00 - 10:30', title: 'Высшая математика', professor: 'Иванов А.П.', location: 'Аудитория 212', type: 'лекция' },
      { id: 2, time: '10:45 - 12:15', title: 'Программирование', professor: 'Петров С.В.', location: 'Аудитория 405', type: 'лекция' },
      { id: 3, time: '13:00 - 14:30', title: 'Английский язык', professor: 'Смирнова О.А.', location: 'Аудитория 308', type: 'практика' },
    ],
    2: [ // Вторник
      { id: 4, time: '9:00 - 10:30', title: 'Физика', professor: 'Кузнецов Д.И.', location: 'Аудитория 101', type: 'лекция' },
      { id: 5, time: '10:45 - 12:15', title: 'Программирование', professor: 'Петров С.В.', location: 'Аудитория 405', type: 'лабораторная' },
    ],
    3: [ // Среда
      { id: 6, time: '10:45 - 12:15', title: 'Базы данных', professor: 'Соколов М.А.', location: 'Аудитория 403', type: 'лекция' },
      { id: 7, time: '13:00 - 14:30', title: 'Высшая математика', professor: 'Иванов А.П.', location: 'Аудитория 212', type: 'практика' },
      { id: 8, time: '14:45 - 16:15', title: 'Физкультура', professor: 'Орлов И.К.', location: 'Спортзал', type: 'практика' },
    ],
    4: [ // Четверг
      { id: 9, time: '9:00 - 10:30', title: 'История', professor: 'Николаева Е.В.', location: 'Аудитория 301', type: 'лекция' },
      { id: 10, time: '10:45 - 12:15', title: 'Физика', professor: 'Кузнецов Д.И.', location: 'Аудитория 102', type: 'лабораторная' },
    ],
    5: [ // Пятница
      { id: 11, time: '10:45 - 12:15', title: 'Базы данных', professor: 'Соколов М.А.', location: 'Аудитория 403', type: 'семинар' },
      { id: 12, time: '13:00 - 14:30', title: 'История', professor: 'Николаева Е.В.', location: 'Аудитория 301', type: 'семинар' },
    ],
    6: [ // Суббота
      { id: 13, time: '9:00 - 10:30', title: 'Английский язык', professor: 'Смирнова О.А.', location: 'Аудитория 308', type: 'семинар' },
    ],
    0: [] // Воскресенье - выходной
  };
  
  return schedules[dayOfWeek] || [];
};

const getTypeIcon = (type: ClassType['type']) => {
  switch(type) {
    case 'лекция': return 'BookOpen';
    case 'практика': return 'PencilRuler';
    case 'семинар': return 'Users';
    case 'лабораторная': return 'FlaskConical';
    default: return 'BookOpen';
  }
};

const getTypeColor = (type: ClassType['type']) => {
  switch(type) {
    case 'лекция': return 'primary';
    case 'практика': return 'secondary';
    case 'семинар': return 'default';
    case 'лабораторная': return 'outline';
    default: return 'default';
  }
};

interface ClassScheduleProps {
  selectedDate: Date;
}

const ClassSchedule: React.FC<ClassScheduleProps> = ({ selectedDate }) => {
  const classes = generateSchedule(selectedDate);
  const today = new Date();
  const isToday = isSameDay(selectedDate, today);
  
  const currentTime = format(new Date(), 'HH:mm');
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">
          Расписание на {format(selectedDate, 'dd.MM.yyyy')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {classes.length > 0 ? (
          <div className="space-y-4">
            {classes.map((cls, index) => {
              const isCurrentClass = isToday && 
                cls.time.split(' - ')[0] <= currentTime && 
                cls.time.split(' - ')[1] >= currentTime;
              
              return (
                <div key={cls.id}>
                  {index > 0 && <Separator className="my-3" />}
                  <div className={cn(
                    "class-card",
                    isCurrentClass && "border-primary"
                  )}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium text-base">{cls.title}</div>
                      <Badge variant={getTypeColor(cls.type) as any} className="ml-2">
                        <Icon name={getTypeIcon(cls.type)} size={14} className="mr-1" />
                        {cls.type}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground mb-3">{cls.time}</div>
                    
                    <div className="flex items-center text-sm mb-1">
                      <Icon name="User" size={14} className="mr-2 text-muted-foreground" />
                      {cls.professor}
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <Icon name="MapPin" size={14} className="mr-2 text-muted-foreground" />
                      {cls.location}
                    </div>
                    
                    {isCurrentClass && (
                      <div className="mt-3 bg-accent p-2 rounded-md flex items-center text-sm">
                        <Icon name="Clock" size={14} className="mr-2 text-primary" />
                        <span className="font-medium">Идет сейчас</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8">
            <Icon name="Coffee" size={32} className="mx-auto mb-2 text-muted-foreground" />
            <p className="text-muted-foreground">Выходной день, занятий нет</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClassSchedule;
