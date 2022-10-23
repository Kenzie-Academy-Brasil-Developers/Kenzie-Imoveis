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
export class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "date" })
  date: string;
  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Properties, (property) => property.schedules)
  property: Properties;

  @ManyToOne(() => User, (user) => user.schedules)
  user: User;
}
