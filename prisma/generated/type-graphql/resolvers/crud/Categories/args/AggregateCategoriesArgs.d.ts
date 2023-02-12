import { CategoriesOrderByWithRelationInput } from "../../../inputs/CategoriesOrderByWithRelationInput";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";
export declare class AggregateCategoriesArgs {
    where?: CategoriesWhereInput | undefined;
    orderBy?: CategoriesOrderByWithRelationInput[] | undefined;
    cursor?: CategoriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
