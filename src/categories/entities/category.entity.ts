import{Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("categorias")
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 150})
    descripcion: string;

    @Column({length: 50})
    color: string;

    @Column({length: 250})
    imagen: string
}
