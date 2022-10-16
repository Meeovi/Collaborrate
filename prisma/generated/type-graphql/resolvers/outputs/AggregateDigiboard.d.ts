import { DigiboardAvgAggregate } from "../outputs/DigiboardAvgAggregate";
import { DigiboardCountAggregate } from "../outputs/DigiboardCountAggregate";
import { DigiboardMaxAggregate } from "../outputs/DigiboardMaxAggregate";
import { DigiboardMinAggregate } from "../outputs/DigiboardMinAggregate";
import { DigiboardSumAggregate } from "../outputs/DigiboardSumAggregate";
export declare class AggregateDigiboard {
    _count: DigiboardCountAggregate | null;
    _avg: DigiboardAvgAggregate | null;
    _sum: DigiboardSumAggregate | null;
    _min: DigiboardMinAggregate | null;
    _max: DigiboardMaxAggregate | null;
}
