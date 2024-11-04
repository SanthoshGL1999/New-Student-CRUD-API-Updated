import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TEACHERINFO } from './teacher entity/teacher.entity';
import { STUDENTINFO } from '../student/Student entity/student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TEACHERINFO,STUDENTINFO])],
  providers: [TeacherService],
  controllers: [TeacherController]
})
export class TeacherModule {}
