import { AgreementsAvgAggregate } from "../outputs/AgreementsAvgAggregate";
import { AgreementsCountAggregate } from "../outputs/AgreementsCountAggregate";
import { AgreementsMaxAggregate } from "../outputs/AgreementsMaxAggregate";
import { AgreementsMinAggregate } from "../outputs/AgreementsMinAggregate";
import { AgreementsSumAggregate } from "../outputs/AgreementsSumAggregate";
export declare class AgreementsGroupBy {
    id: bigint;
    name: string | null;
    type: string | null;
    content: string | null;
    created: Date | null;
    excerpt: string | null;
    image: string | null;
    mediamanager: string | null;
    reference_id: string | null;
    shop_id: string | null;
    updated: Date | null;
    user_id: string | null;
    _count: AgreementsCountAggregate | null;
    _avg: AgreementsAvgAggregate | null;
    _sum: AgreementsSumAggregate | null;
    _min: AgreementsMinAggregate | null;
    _max: AgreementsMaxAggregate | null;
}
