import { KnowledgebaseAvgAggregate } from "../outputs/KnowledgebaseAvgAggregate";
import { KnowledgebaseCountAggregate } from "../outputs/KnowledgebaseCountAggregate";
import { KnowledgebaseMaxAggregate } from "../outputs/KnowledgebaseMaxAggregate";
import { KnowledgebaseMinAggregate } from "../outputs/KnowledgebaseMinAggregate";
import { KnowledgebaseSumAggregate } from "../outputs/KnowledgebaseSumAggregate";
export declare class AggregateKnowledgebase {
    _count: KnowledgebaseCountAggregate | null;
    _avg: KnowledgebaseAvgAggregate | null;
    _sum: KnowledgebaseSumAggregate | null;
    _min: KnowledgebaseMinAggregate | null;
    _max: KnowledgebaseMaxAggregate | null;
}
