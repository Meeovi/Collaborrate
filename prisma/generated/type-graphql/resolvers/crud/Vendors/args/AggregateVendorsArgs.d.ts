import { VendorsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VendorsOrderByWithRelationAndSearchRelevanceInput";
import { VendorsWhereInput } from "../../../inputs/VendorsWhereInput";
import { VendorsWhereUniqueInput } from "../../../inputs/VendorsWhereUniqueInput";
export declare class AggregateVendorsArgs {
    where?: VendorsWhereInput | undefined;
    orderBy?: VendorsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: VendorsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
