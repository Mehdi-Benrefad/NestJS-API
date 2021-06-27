import {Entity , Column , PrimaryGeneratedColumn} from 'typeorm';

@Entity('feed_post')
export class FeedPostEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 'there is no text on this post' })
    body: string;

    @Column({type: 'timestamp' , default: ()=>'CURRENT_TIMESTAMP'})
    createdAt: Date;
}