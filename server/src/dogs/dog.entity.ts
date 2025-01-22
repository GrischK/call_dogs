import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
  LEADER = 'leader',
  WHEELER = 'wheeler',
  SWING_DOG = 'swing dog',
  TEAM_DOG = 'team dog',
}

@Entity()
export class Dog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  breed: string;

  @Column({ nullable: true, default: 0 })
  age: number;

  @Column('enum', {
    nullable: true,
    enum: Role,
    array: true,
    default: [Role.TEAM_DOG],
  })
  role: Role[];
}

export const rolesList = Object.values(Role);
