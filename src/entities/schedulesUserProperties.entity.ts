import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
export class SchedulesUserProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @CreateDateColumn()
  date: Date;
  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => Properties)
  Properties: Properties;

  @ManyToOne(() => User)
  User: User;
}
