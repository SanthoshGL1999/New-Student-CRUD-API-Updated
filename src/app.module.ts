import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseService } from './Config/studentDB.Config';
import { StudentModule } from './Module/student/student.module';
import { TeacherModule } from './Module/teacher/teacher.module';


@Module({
  imports:[StudentModule,TeacherModule,
    TypeOrmModule.forRootAsync({useClass:DataBaseService}),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
