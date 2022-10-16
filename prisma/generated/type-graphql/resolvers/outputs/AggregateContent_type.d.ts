import { Content_typeAvgAggregate } from "../outputs/Content_typeAvgAggregate";
import { Content_typeCountAggregate } from "../outputs/Content_typeCountAggregate";
import { Content_typeMaxAggregate } from "../outputs/Content_typeMaxAggregate";
import { Content_typeMinAggregate } from "../outputs/Content_typeMinAggregate";
import { Content_typeSumAggregate } from "../outputs/Content_typeSumAggregate";
export declare class AggregateContent_type {
    _count: Content_typeCountAggregate | null;
    _avg: Content_typeAvgAggregate | null;
    _sum: Content_typeSumAggregate | null;
    _min: Content_typeMinAggregate | null;
    _max: Content_typeMaxAggregate | null;
}
