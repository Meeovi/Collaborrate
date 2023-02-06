import { AttributesAvgAggregate } from "../outputs/AttributesAvgAggregate";
import { AttributesCountAggregate } from "../outputs/AttributesCountAggregate";
import { AttributesMaxAggregate } from "../outputs/AttributesMaxAggregate";
import { AttributesMinAggregate } from "../outputs/AttributesMinAggregate";
import { AttributesSumAggregate } from "../outputs/AttributesSumAggregate";
export declare class AggregateAttributes {
    _count: AttributesCountAggregate | null;
    _avg: AttributesAvgAggregate | null;
    _sum: AttributesSumAggregate | null;
    _min: AttributesMinAggregate | null;
    _max: AttributesMaxAggregate | null;
}
