import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsBoolean, IsString, IsUUID } from 'class-validator';

@Entity()
export class Form {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  uniqueID!: string;

  @Column()
  @IsString()
  title!: string;

  @Column()
  @IsString()
  name!: string;

  @Column()
  @IsEmail()
  email!: string;

  @Column()
  @IsString()
  phonenumber!: string;

  @Column()
  @IsBoolean()
  isGraduate!: boolean;
}
