import { Pdf_templatesAvgAggregate } from "../outputs/Pdf_templatesAvgAggregate";
import { Pdf_templatesCountAggregate } from "../outputs/Pdf_templatesCountAggregate";
import { Pdf_templatesMaxAggregate } from "../outputs/Pdf_templatesMaxAggregate";
import { Pdf_templatesMinAggregate } from "../outputs/Pdf_templatesMinAggregate";
import { Pdf_templatesSumAggregate } from "../outputs/Pdf_templatesSumAggregate";
export declare class Pdf_templatesGroupBy {
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
    _count: Pdf_templatesCountAggregate | null;
    _avg: Pdf_templatesAvgAggregate | null;
    _sum: Pdf_templatesSumAggregate | null;
    _min: Pdf_templatesMinAggregate | null;
    _max: Pdf_templatesMaxAggregate | null;
}
