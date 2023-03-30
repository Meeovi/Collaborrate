import { TemplatesAvgAggregate } from "../outputs/TemplatesAvgAggregate";
import { TemplatesCountAggregate } from "../outputs/TemplatesCountAggregate";
import { TemplatesMaxAggregate } from "../outputs/TemplatesMaxAggregate";
import { TemplatesMinAggregate } from "../outputs/TemplatesMinAggregate";
import { TemplatesSumAggregate } from "../outputs/TemplatesSumAggregate";
export declare class AggregateTemplates {
    _count: TemplatesCountAggregate | null;
    _avg: TemplatesAvgAggregate | null;
    _sum: TemplatesSumAggregate | null;
    _min: TemplatesMinAggregate | null;
    _max: TemplatesMaxAggregate | null;
}
