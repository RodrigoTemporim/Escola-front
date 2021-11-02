import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { Moment } from 'moment';

@Entity()
export class Alunos{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ra: string;

    @Column()
    nm: string;

    @Column()
    birth: string;

    @Column()
    ads: string;

    @Column({
        default: true
    })

    matriculado: boolean;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    

}