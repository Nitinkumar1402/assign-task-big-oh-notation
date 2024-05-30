import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Form } from './Form';
import { IsEmail, IsBoolean, IsString, IsUUID } from 'class-validator';

@Entity()
export class FormData {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id!: string;

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

  @ManyToOne(() => Form, form => form.uniqueID)
  form!: Form;
}
