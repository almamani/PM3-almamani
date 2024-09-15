import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { statusEnum } from "../enums/statusEnum";
@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column({
    type: "enum",
    enum: statusEnum,
    default: statusEnum.ACTIVE,
  })
  status: statusEnum;

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
