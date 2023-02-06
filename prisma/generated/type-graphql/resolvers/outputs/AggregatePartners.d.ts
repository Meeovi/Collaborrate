import { PartnersAvgAggregate } from "../outputs/PartnersAvgAggregate";
import { PartnersCountAggregate } from "../outputs/PartnersCountAggregate";
import { PartnersMaxAggregate } from "../outputs/PartnersMaxAggregate";
import { PartnersMinAggregate } from "../outputs/PartnersMinAggregate";
import { PartnersSumAggregate } from "../outputs/PartnersSumAggregate";
export declare class AggregatePartners {
    _count: PartnersCountAggregate | null;
    _avg: PartnersAvgAggregate | null;
    _sum: PartnersSumAggregate | null;
    _min: PartnersMinAggregate | null;
    _max: PartnersMaxAggregate | null;
}
