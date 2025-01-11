import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Dog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    breed: string;

    @Column({ default: 0 })
    age: number;
}