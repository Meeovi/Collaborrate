import { Pdf_templatesOrderByWithRelationInput } from "../../../inputs/Pdf_templatesOrderByWithRelationInput";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";
import { Pdf_templatesWhereUniqueInput } from "../../../inputs/Pdf_templatesWhereUniqueInput";
export declare class AggregatePdf_templatesArgs {
    where?: Pdf_templatesWhereInput | undefined;
    orderBy?: Pdf_templatesOrderByWithRelationInput[] | undefined;
    cursor?: Pdf_templatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
