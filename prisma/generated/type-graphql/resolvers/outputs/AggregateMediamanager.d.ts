import { MediamanagerAvgAggregate } from "../outputs/MediamanagerAvgAggregate";
import { MediamanagerCountAggregate } from "../outputs/MediamanagerCountAggregate";
import { MediamanagerMaxAggregate } from "../outputs/MediamanagerMaxAggregate";
import { MediamanagerMinAggregate } from "../outputs/MediamanagerMinAggregate";
import { MediamanagerSumAggregate } from "../outputs/MediamanagerSumAggregate";
export declare class AggregateMediamanager {
    _count: MediamanagerCountAggregate | null;
    _avg: MediamanagerAvgAggregate | null;
    _sum: MediamanagerSumAggregate | null;
    _min: MediamanagerMinAggregate | null;
    _max: MediamanagerMaxAggregate | null;
}
