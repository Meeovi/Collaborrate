import { ReturnsOrderByWithRelationInput } from "../../../inputs/ReturnsOrderByWithRelationInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";
export declare class FindManyReturnsArgs {
    where?: ReturnsWhereInput | undefined;
    orderBy?: ReturnsOrderByWithRelationInput[] | undefined;
    cursor?: ReturnsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "validity" | "return_prefix" | "prod_id" | "cust_id"> | undefined;
}
