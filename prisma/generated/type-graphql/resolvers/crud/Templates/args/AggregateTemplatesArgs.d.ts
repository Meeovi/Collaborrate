import { TemplatesOrderByWithRelationInput } from "../../../inputs/TemplatesOrderByWithRelationInput";
import { TemplatesWhereInput } from "../../../inputs/TemplatesWhereInput";
import { TemplatesWhereUniqueInput } from "../../../inputs/TemplatesWhereUniqueInput";
export declare class AggregateTemplatesArgs {
    where?: TemplatesWhereInput | undefined;
    orderBy?: TemplatesOrderByWithRelationInput[] | undefined;
    cursor?: TemplatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
