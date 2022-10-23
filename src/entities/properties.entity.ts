import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addressses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { SchedulesUserProperties } from "./schedulesUserProperties.entity";

@Entity("Properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column("decimal", { precision: 12, scale: 2 })
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addressses, Addressses=> Addressses.property, {
    eager: true,
  })
  @JoinColumn()
  address: Addressses;

  @OneToMany(
    () => SchedulesUserProperties,
    (SchedulesUserProperties) => SchedulesUserProperties.Properties
  )
  PropertiesList: Properties[];

  @ManyToOne(() => Categories, (Categories) => Categories.properties)
  category: Categories;

  
}
