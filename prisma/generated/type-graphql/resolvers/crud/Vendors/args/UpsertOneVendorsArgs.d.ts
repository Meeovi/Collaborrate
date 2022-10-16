import { VendorsCreateInput } from "../../../inputs/VendorsCreateInput";
import { VendorsUpdateInput } from "../../../inputs/VendorsUpdateInput";
import { VendorsWhereUniqueInput } from "../../../inputs/VendorsWhereUniqueInput";
export declare class UpsertOneVendorsArgs {
    where: VendorsWhereUniqueInput;
    create: VendorsCreateInput;
    update: VendorsUpdateInput;
}
