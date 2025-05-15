
import React, { useState } from 'react';
import Header from '@/components/Header';
import Calendar from '@/components/Calendar';
import ClassSchedule from '@/components/ClassSchedule';
import Profile from '@/components/Profile';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Расписание занятий</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Filter" size={16} className="mr-1" />
              Фильтры
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Download" size={16} className="mr-1" />
              Скачать
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Calendar onDateSelect={setSelectedDate} />
            <ClassSchedule selectedDate={selectedDate} />
          </div>
          
          <div className="space-y-6">
            <Profile />
            
            <div className="bg-accent/50 rounded-lg p-4 border">
              <h3 className="font-medium mb-2 flex items-center">
                <Icon name="Bell" size={16} className="mr-2 text-primary" />
                Уведомления
              </h3>
              <ul className="space-y-2">
                <li className="text-sm p-2 bg-background rounded-md border">
                  <span className="font-medium">10:45</span> — Начало занятия "Программирование"
                </li>
                <li className="text-sm p-2 bg-background rounded-md border">
                  <span className="font-medium">12:30</span> — Консультация с преподавателем
                </li>
                <li className="text-sm p-2 bg-background rounded-md border">
                  <span className="font-medium">14:00</span> — Дедлайн сдачи домашней работы
                </li>
              </ul>
              <Button variant="link" size="sm" className="mt-2 w-full">
                Все уведомления
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 JunСтуд. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">О нас</Button>
            <Button variant="ghost" size="sm">Контакты</Button>
            <Button variant="ghost" size="sm">Помощь</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
