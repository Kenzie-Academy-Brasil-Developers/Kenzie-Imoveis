import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";

@Entity("Categories")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Properties, (Properties) => Properties.category)
  properties: Properties[];
}
