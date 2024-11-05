import { TEACHERINFO } from "src/Module/teacher/teacher entity/teacher.entity";
import { Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, OneToMany } from "typeorm";

@Entity()
export class STUDENTINFO{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ROLLNO: number;

    @Column()
    NAME: string;

    @Column()
    AGE: number;

    @Column()
    COURSE: string;

    @Column()
    EMAIL_ID: string;

    @Column()
    TEACHER_ID:number;

    @ManyToMany(()=>TEACHERINFO,(teacher)=>teacher.student)
    teacher: TEACHERINFO[];
}