import { DigiboardAvgAggregate } from "../outputs/DigiboardAvgAggregate";
import { DigiboardCountAggregate } from "../outputs/DigiboardCountAggregate";
import { DigiboardMaxAggregate } from "../outputs/DigiboardMaxAggregate";
import { DigiboardMinAggregate } from "../outputs/DigiboardMinAggregate";
import { DigiboardSumAggregate } from "../outputs/DigiboardSumAggregate";
export declare class DigiboardGroupBy {
    id: number;
    name: string;
    board: string | null;
    created_at: Date;
    student: string | null;
    course: string | null;
    _count: DigiboardCountAggregate | null;
    _avg: DigiboardAvgAggregate | null;
    _sum: DigiboardSumAggregate | null;
    _min: DigiboardMinAggregate | null;
    _max: DigiboardMaxAggregate | null;
}
