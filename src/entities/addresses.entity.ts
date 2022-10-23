import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";

@Entity("Addressses")
export class Addressses {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  district: string;

  @Column({length:8})
  zipCode: string;

  @Column()
  number?: string;

  @Column()
  city: string;

  @Column({length:2})
  state: string;

  @OneToOne(() => Properties,Properties=> Properties.address)
  @JoinColumn()
  property:Properties
}
