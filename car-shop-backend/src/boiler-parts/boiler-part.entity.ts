import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'BoilerParts' }) // с большой буквы!
export class BoilerPart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  boiler_manufacturer: string;

  @Column()
  price: number;

  @Column()
  parts_manufacturer: string;

  @Column()
  vendor_code: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  images: string;

  @Column()
  in_stock: number;

  @Column({ type: 'tinyint', width: 1 })
  bestseller: boolean;

  @Column({ type: 'tinyint', width: 1 })
  new: boolean;

  @Column()
  popularity: number;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  compatibility: string;

  @Column({ type: 'datetime', nullable: true })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: true })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 250, nullable: true })
  Model: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  Year: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  Mileage: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  Engine: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  Transmission: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  Drive: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  fuel: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  processed: string;

  @Column({ type: 'simple-array', nullable: true })
  configuration: string[];
}
