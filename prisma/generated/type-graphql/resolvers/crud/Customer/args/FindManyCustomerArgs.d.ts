import { CustomerOrderByWithRelationInput } from "../../../inputs/CustomerOrderByWithRelationInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
export declare class FindManyCustomerArgs {
    where?: CustomerWhereInput | undefined;
    orderBy?: CustomerOrderByWithRelationInput[] | undefined;
    cursor?: CustomerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "firstname" | "lastname" | "username" | "email" | "city" | "state" | "country" | "postal" | "active"> | undefined;
}
