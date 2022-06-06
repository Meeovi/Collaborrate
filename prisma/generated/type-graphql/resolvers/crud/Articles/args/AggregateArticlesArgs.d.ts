import { ArticlesOrderByWithRelationInput } from "../../../inputs/ArticlesOrderByWithRelationInput";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";
export declare class AggregateArticlesArgs {
    where?: ArticlesWhereInput | undefined;
    orderBy?: ArticlesOrderByWithRelationInput[] | undefined;
    cursor?: ArticlesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
