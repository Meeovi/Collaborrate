import { PartnersAvgAggregate } from "../outputs/PartnersAvgAggregate";
import { PartnersCountAggregate } from "../outputs/PartnersCountAggregate";
import { PartnersMaxAggregate } from "../outputs/PartnersMaxAggregate";
import { PartnersMinAggregate } from "../outputs/PartnersMinAggregate";
import { PartnersSumAggregate } from "../outputs/PartnersSumAggregate";
export declare class PartnersGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    isPublic: string | null;
    business_type: string | null;
    _count: PartnersCountAggregate | null;
    _avg: PartnersAvgAggregate | null;
    _sum: PartnersSumAggregate | null;
    _min: PartnersMinAggregate | null;
    _max: PartnersMaxAggregate | null;
}
