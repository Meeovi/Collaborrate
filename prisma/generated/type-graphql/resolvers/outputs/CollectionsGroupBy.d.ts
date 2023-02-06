import { CollectionsAvgAggregate } from "../outputs/CollectionsAvgAggregate";
import { CollectionsCountAggregate } from "../outputs/CollectionsCountAggregate";
import { CollectionsMaxAggregate } from "../outputs/CollectionsMaxAggregate";
import { CollectionsMinAggregate } from "../outputs/CollectionsMinAggregate";
import { CollectionsSumAggregate } from "../outputs/CollectionsSumAggregate";
export declare class CollectionsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    description: string | null;
    image: string | null;
    product: string | null;
    meta_title: string | null;
    meta_keywords: string | null;
    meta_description: string | null;
    _count: CollectionsCountAggregate | null;
    _avg: CollectionsAvgAggregate | null;
    _sum: CollectionsSumAggregate | null;
    _min: CollectionsMinAggregate | null;
    _max: CollectionsMaxAggregate | null;
}
