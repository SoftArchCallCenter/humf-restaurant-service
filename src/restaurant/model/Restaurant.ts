import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name : "restaurants"})
export class Restaurant {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'restaurant_id'
    })
    id: number; 

    @Column({
        nullable: false,
    })
    name: string;

    @Column({
        nullable: false,
    })
    open_time: string;

    @Column({
        nullable: false,
    })
    close_time: string;

    @Column()
    address: string;

    @Column({
        nullable: false,
    })
    createAt: Date;

    @Column({
        nullable: false,
    })
    updateAt: Date;
}