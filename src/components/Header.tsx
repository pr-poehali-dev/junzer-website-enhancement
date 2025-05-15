
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-primary text-primary-foreground rounded-md p-1.5">
            <Icon name="Calendar" size={22} />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">JunСтуд</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-sm font-medium">Расписание</Button>
          <Button variant="ghost" className="text-sm font-medium">Преподаватели</Button>
          <Button variant="ghost" className="text-sm font-medium">Группы</Button>
          <Button variant="ghost" className="text-sm font-medium">Помощь</Button>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
          <Button>
            <Icon name="User" className="mr-2 h-4 w-4" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
