import { CustomizationsAvgAggregate } from "../outputs/CustomizationsAvgAggregate";
import { CustomizationsCountAggregate } from "../outputs/CustomizationsCountAggregate";
import { CustomizationsMaxAggregate } from "../outputs/CustomizationsMaxAggregate";
import { CustomizationsMinAggregate } from "../outputs/CustomizationsMinAggregate";
import { CustomizationsSumAggregate } from "../outputs/CustomizationsSumAggregate";
export declare class AggregateCustomizations {
    _count: CustomizationsCountAggregate | null;
    _avg: CustomizationsAvgAggregate | null;
    _sum: CustomizationsSumAggregate | null;
    _min: CustomizationsMinAggregate | null;
    _max: CustomizationsMaxAggregate | null;
}
