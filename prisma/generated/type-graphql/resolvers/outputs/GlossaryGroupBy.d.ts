import { GlossaryAvgAggregate } from "../outputs/GlossaryAvgAggregate";
import { GlossaryCountAggregate } from "../outputs/GlossaryCountAggregate";
import { GlossaryMaxAggregate } from "../outputs/GlossaryMaxAggregate";
import { GlossaryMinAggregate } from "../outputs/GlossaryMinAggregate";
import { GlossarySumAggregate } from "../outputs/GlossarySumAggregate";
export declare class GlossaryGroupBy {
    id: number;
    name: string;
    content: string | null;
    image: string | null;
    published: Date | null;
    _count: GlossaryCountAggregate | null;
    _avg: GlossaryAvgAggregate | null;
    _sum: GlossarySumAggregate | null;
    _min: GlossaryMinAggregate | null;
    _max: GlossaryMaxAggregate | null;
}
