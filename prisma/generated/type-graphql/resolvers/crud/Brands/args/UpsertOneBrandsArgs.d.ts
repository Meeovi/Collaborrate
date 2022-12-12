import { BrandsCreateInput } from "../../../inputs/BrandsCreateInput";
import { BrandsUpdateInput } from "../../../inputs/BrandsUpdateInput";
import { BrandsWhereUniqueInput } from "../../../inputs/BrandsWhereUniqueInput";
export declare class UpsertOneBrandsArgs {
    where: BrandsWhereUniqueInput;
    create: BrandsCreateInput;
    update: BrandsUpdateInput;
}
