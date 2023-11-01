import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name : "restaurants"})
export class RestaurantEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'restaurant_id'
    })
    id: number; 

    @Column({
        nullable: false,
    })
    userId: number;

    @Column({
        nullable: false,
    })
    name: string;

    @Column({
        nullable: false,
    })
    openTime: string;

    @Column({
        nullable: false,
    })
    closeTime: string;

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