import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name : "menus"})
export class MenuEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'menu_id'
    })
    id: number; 

    @Column({
        nullable: false,
    })
    name: string;

    @Column({
        nullable: false,
    })
    price: number;

    @Column()
    description: string;

    @Column({
        nullable: false,
    })
    createAt: Date;

    @Column({
        nullable: false,
    })
    updateAt: Date;
}
