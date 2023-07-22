import { Poll } from 'src/poll/poll.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  confirmed: boolean;

  @OneToMany(() => Poll, poll => poll.user)
  poll: Promise<Poll[]>
}