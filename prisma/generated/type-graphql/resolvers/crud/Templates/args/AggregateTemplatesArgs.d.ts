import { TemplatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TemplatesOrderByWithRelationAndSearchRelevanceInput";
import { TemplatesWhereInput } from "../../../inputs/TemplatesWhereInput";
import { TemplatesWhereUniqueInput } from "../../../inputs/TemplatesWhereUniqueInput";
export declare class AggregateTemplatesArgs {
    where?: TemplatesWhereInput | undefined;
    orderBy?: TemplatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TemplatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
