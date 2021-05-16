import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserAccount {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar' })
    public email: string;

    @Column('varchar')
    public password: string;

    @Column('varchar')
    public phone: string;
}