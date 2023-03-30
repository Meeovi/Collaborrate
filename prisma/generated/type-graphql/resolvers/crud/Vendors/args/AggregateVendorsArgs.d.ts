import { VendorsOrderByWithRelationInput } from "../../../inputs/VendorsOrderByWithRelationInput";
import { VendorsWhereInput } from "../../../inputs/VendorsWhereInput";
import { VendorsWhereUniqueInput } from "../../../inputs/VendorsWhereUniqueInput";
export declare class AggregateVendorsArgs {
    where?: VendorsWhereInput | undefined;
    orderBy?: VendorsOrderByWithRelationInput[] | undefined;
    cursor?: VendorsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
