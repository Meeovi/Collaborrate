import { CategoriesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CategoriesOrderByWithRelationAndSearchRelevanceInput";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";
export declare class AggregateCategoriesArgs {
    where?: CategoriesWhereInput | undefined;
    orderBy?: CategoriesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CategoriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
