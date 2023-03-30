import { BrandsOrderByWithRelationInput } from "../../../inputs/BrandsOrderByWithRelationInput";
import { BrandsWhereInput } from "../../../inputs/BrandsWhereInput";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";
export declare class AggregateBrandsArgs {
    where?: BrandsWhereInput | undefined;
    orderBy?: BrandsOrderByWithRelationInput[] | undefined;
    cursor?: BrandsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
