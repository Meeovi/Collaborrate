import { CollectionsAvgAggregate } from "../outputs/CollectionsAvgAggregate";
import { CollectionsCountAggregate } from "../outputs/CollectionsCountAggregate";
import { CollectionsMaxAggregate } from "../outputs/CollectionsMaxAggregate";
import { CollectionsMinAggregate } from "../outputs/CollectionsMinAggregate";
import { CollectionsSumAggregate } from "../outputs/CollectionsSumAggregate";
export declare class AggregateCollections {
    _count: CollectionsCountAggregate | null;
    _avg: CollectionsAvgAggregate | null;
    _sum: CollectionsSumAggregate | null;
    _min: CollectionsMinAggregate | null;
    _max: CollectionsMaxAggregate | null;
}
