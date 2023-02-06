import { TagsAvgAggregate } from "../outputs/TagsAvgAggregate";
import { TagsCountAggregate } from "../outputs/TagsCountAggregate";
import { TagsMaxAggregate } from "../outputs/TagsMaxAggregate";
import { TagsMinAggregate } from "../outputs/TagsMinAggregate";
import { TagsSumAggregate } from "../outputs/TagsSumAggregate";
export declare class TagsGroupBy {
    id: number;
    name: string;
    excerpt: string | null;
    categories: string | null;
    articles: string | null;
    products: string | null;
    customers: string | null;
    users: string | null;
    _count: TagsCountAggregate | null;
    _avg: TagsAvgAggregate | null;
    _sum: TagsSumAggregate | null;
    _min: TagsMinAggregate | null;
    _max: TagsMaxAggregate | null;
}
