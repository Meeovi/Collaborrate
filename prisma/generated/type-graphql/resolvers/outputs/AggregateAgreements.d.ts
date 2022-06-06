import { AgreementsAvgAggregate } from "../outputs/AgreementsAvgAggregate";
import { AgreementsCountAggregate } from "../outputs/AgreementsCountAggregate";
import { AgreementsMaxAggregate } from "../outputs/AgreementsMaxAggregate";
import { AgreementsMinAggregate } from "../outputs/AgreementsMinAggregate";
import { AgreementsSumAggregate } from "../outputs/AgreementsSumAggregate";
export declare class AggregateAgreements {
    _count: AgreementsCountAggregate | null;
    _avg: AgreementsAvgAggregate | null;
    _sum: AgreementsSumAggregate | null;
    _min: AgreementsMinAggregate | null;
    _max: AgreementsMaxAggregate | null;
}
