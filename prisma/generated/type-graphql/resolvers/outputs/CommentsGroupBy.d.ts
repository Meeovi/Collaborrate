import { CommentsAvgAggregate } from "../outputs/CommentsAvgAggregate";
import { CommentsCountAggregate } from "../outputs/CommentsCountAggregate";
import { CommentsMaxAggregate } from "../outputs/CommentsMaxAggregate";
import { CommentsMinAggregate } from "../outputs/CommentsMinAggregate";
import { CommentsSumAggregate } from "../outputs/CommentsSumAggregate";
export declare class CommentsGroupBy {
    id: number;
    customer_name: string;
    description: string | null;
    image: string | null;
    response: string | null;
    published: Date | null;
    cust_id: number;
    customers: string | null;
    mediamanager: string | null;
    trainings: string | null;
    _count: CommentsCountAggregate | null;
    _avg: CommentsAvgAggregate | null;
    _sum: CommentsSumAggregate | null;
    _min: CommentsMinAggregate | null;
    _max: CommentsMaxAggregate | null;
}
