
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Profile: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Профиль студента</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20 mb-3">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="Фото студента" />
            <AvatarFallback className="text-lg">ИИ</AvatarFallback>
          </Avatar>
          
          <h3 className="font-semibold text-lg">Иванов Иван</h3>
          <p className="text-sm text-muted-foreground mb-3">Группа ИС-232</p>
          
          <div className="flex justify-center gap-2 mb-5">
            <Button variant="outline" size="sm">
              <Icon name="BookMarked" size={14} className="mr-1" />
              Зачетка
            </Button>
            <Button size="sm">
              <Icon name="Calendar" size={14} className="mr-1" />
              Расписание
            </Button>
          </div>
          
          <div className="w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Прогресс семестра</span>
              <span className="text-sm text-muted-foreground">65%</span>
            </div>
            <Progress value={65} className="mb-4" />
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-muted/40 rounded-md p-3">
                <div className="text-xl font-semibold">2/4</div>
                <div className="text-xs text-muted-foreground">Сдано экзаменов</div>
              </div>
              <div className="bg-muted/40 rounded-md p-3">
                <div className="text-xl font-semibold">3/5</div>
                <div className="text-xs text-muted-foreground">Сдано зачетов</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
