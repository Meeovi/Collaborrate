import { BrandsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/BrandsOrderByWithRelationAndSearchRelevanceInput";
import { BrandsWhereInput } from "../../../inputs/BrandsWhereInput";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";
export declare class AggregateBrandsArgs {
    where?: BrandsWhereInput | undefined;
    orderBy?: BrandsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: BrandsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
