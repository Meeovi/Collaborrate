import { ArticlesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ArticlesOrderByWithRelationAndSearchRelevanceInput";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";
export declare class AggregateArticlesArgs {
    where?: ArticlesWhereInput | undefined;
    orderBy?: ArticlesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ArticlesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
