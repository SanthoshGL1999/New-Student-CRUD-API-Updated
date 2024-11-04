import { TEACHERINFO } from "src/Module/teacher/teacher entity/teacher.entity";
export declare class STUDENTINFO {
    ID: number;
    ROLLNO: number;
    NAME: string;
    AGE: number;
    COURSE: string;
    EMAIL_ID: string;
    TEACHER_ID: number;
    teacher: TEACHERINFO[];
}
