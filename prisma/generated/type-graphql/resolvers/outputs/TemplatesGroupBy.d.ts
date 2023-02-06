import { TemplatesAvgAggregate } from "../outputs/TemplatesAvgAggregate";
import { TemplatesCountAggregate } from "../outputs/TemplatesCountAggregate";
import { TemplatesMaxAggregate } from "../outputs/TemplatesMaxAggregate";
import { TemplatesMinAggregate } from "../outputs/TemplatesMinAggregate";
import { TemplatesSumAggregate } from "../outputs/TemplatesSumAggregate";
export declare class TemplatesGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    assigned_to: string | null;
    type: string | null;
    active: string | null;
    page_size: string | null;
    orientation: string | null;
    content: string | null;
    header: string | null;
    footer: string | null;
    margin_left: string | null;
    margin_right: string | null;
    margin_top: string | null;
    margin_bottom: string | null;
    margin_header: string | null;
    margin_footer: string | null;
    _count: TemplatesCountAggregate | null;
    _avg: TemplatesAvgAggregate | null;
    _sum: TemplatesSumAggregate | null;
    _min: TemplatesMinAggregate | null;
    _max: TemplatesMaxAggregate | null;
}
