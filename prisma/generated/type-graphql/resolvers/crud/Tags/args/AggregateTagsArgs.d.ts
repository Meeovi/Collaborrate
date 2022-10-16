import { TagsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TagsOrderByWithRelationAndSearchRelevanceInput";
import { TagsWhereInput } from "../../../inputs/TagsWhereInput";
import { TagsWhereUniqueInput } from "../../../inputs/TagsWhereUniqueInput";
export declare class AggregateTagsArgs {
    where?: TagsWhereInput | undefined;
    orderBy?: TagsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TagsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
