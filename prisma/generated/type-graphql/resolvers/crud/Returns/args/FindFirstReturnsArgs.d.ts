import { ReturnsOrderByWithRelationInput } from "../../../inputs/ReturnsOrderByWithRelationInput";
import { ReturnsWhereInput } from "../../../inputs/ReturnsWhereInput";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";
export declare class FindFirstReturnsArgs {
    where?: ReturnsWhereInput | undefined;
    orderBy?: ReturnsOrderByWithRelationInput[] | undefined;
    cursor?: ReturnsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "validity" | "return_prefix" | "customers" | "products" | "type" | "description" | "shippingNumber" | "shippingDescription" | "status" | "liquidationReason" | "media" | "weight" | "height" | "howShipped" | "location" | "shipTo" | "case_id"> | undefined;
}
