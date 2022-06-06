import { PollsAvgAggregate } from "../outputs/PollsAvgAggregate";
import { PollsCountAggregate } from "../outputs/PollsCountAggregate";
import { PollsMaxAggregate } from "../outputs/PollsMaxAggregate";
import { PollsMinAggregate } from "../outputs/PollsMinAggregate";
import { PollsSumAggregate } from "../outputs/PollsSumAggregate";
export declare class PollsGroupBy {
    id: number;
    name: string;
    excerpt: string | null;
    description: string | null;
    image: string | null;
    published: Date | null;
    question: string | null;
    response: string | null;
    categories: string | null;
    articles: string | null;
    products: string | null;
    customers: string | null;
    users: string | null;
    _count: PollsCountAggregate | null;
    _avg: PollsAvgAggregate | null;
    _sum: PollsSumAggregate | null;
    _min: PollsMinAggregate | null;
    _max: PollsMaxAggregate | null;
}
