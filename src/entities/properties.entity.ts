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
import { Schedules } from "./schedulesUserProperties.entity";

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

  @OneToOne(() => Addressses, (Addressses) => Addressses.property, {
    eager: true,
  })
  @JoinColumn()
  address: Addressses;

  @OneToMany(() => Schedules, (Schedules) => Schedules.property)
  schedules: Schedules[];

  @ManyToOne(() => Categories, (Categories) => Categories)
  category: Categories;
}
