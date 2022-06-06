import { KnowledgebaseAvgAggregate } from "../outputs/KnowledgebaseAvgAggregate";
import { KnowledgebaseCountAggregate } from "../outputs/KnowledgebaseCountAggregate";
import { KnowledgebaseMaxAggregate } from "../outputs/KnowledgebaseMaxAggregate";
import { KnowledgebaseMinAggregate } from "../outputs/KnowledgebaseMinAggregate";
import { KnowledgebaseSumAggregate } from "../outputs/KnowledgebaseSumAggregate";
export declare class KnowledgebaseGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    status: string | null;
    revision: string | null;
    content: string | null;
    resolution: string | null;
    author: string | null;
    approver: string | null;
    date_modified: Date | null;
    _count: KnowledgebaseCountAggregate | null;
    _avg: KnowledgebaseAvgAggregate | null;
    _sum: KnowledgebaseSumAggregate | null;
    _min: KnowledgebaseMinAggregate | null;
    _max: KnowledgebaseMaxAggregate | null;
}
