import { Pdf_templatesAvgAggregate } from "../outputs/Pdf_templatesAvgAggregate";
import { Pdf_templatesCountAggregate } from "../outputs/Pdf_templatesCountAggregate";
import { Pdf_templatesMaxAggregate } from "../outputs/Pdf_templatesMaxAggregate";
import { Pdf_templatesMinAggregate } from "../outputs/Pdf_templatesMinAggregate";
import { Pdf_templatesSumAggregate } from "../outputs/Pdf_templatesSumAggregate";
export declare class AggregatePdf_templates {
    _count: Pdf_templatesCountAggregate | null;
    _avg: Pdf_templatesAvgAggregate | null;
    _sum: Pdf_templatesSumAggregate | null;
    _min: Pdf_templatesMinAggregate | null;
    _max: Pdf_templatesMaxAggregate | null;
}
