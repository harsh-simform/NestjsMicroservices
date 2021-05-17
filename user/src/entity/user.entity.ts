import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('nest_user')
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar' })
    public email: string;

    @Column('varchar')
    public password: string;

    @Column('varchar')
    public phone: string;

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;
}