import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Exclude} from "class-transformer"
import { SchedulesUserProperties } from "./schedulesUserProperties.entity";

@Entity("User")
export class User { 
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length:60 } )
  name: string;

  @Column({length:60, unique:true})
  email: string;
  
  @Column({length:60})
  @Exclude()
  password:string;

  @Column()
  isAdm:boolean

  @Column({default: true})
  isActive:boolean

  @CreateDateColumn()
  createdAt:Date

  @CreateDateColumn()
  updatedAt:Date

  @OneToMany(()=>SchedulesUserProperties, SchedulesUserProperties => SchedulesUserProperties.User)
   ScheduleUserPropertiesList: SchedulesUserProperties[]
}
