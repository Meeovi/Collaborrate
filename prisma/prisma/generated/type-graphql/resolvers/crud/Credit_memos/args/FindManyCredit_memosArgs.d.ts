import { Credit_memosOrderByWithRelationInput } from "../../../inputs/Credit_memosOrderByWithRelationInput";
import { Credit_memosWhereInput } from "../../../inputs/Credit_memosWhereInput";
import { Credit_memosWhereUniqueInput } from "../../../inputs/Credit_memosWhereUniqueInput";
export declare class FindManyCredit_memosArgs {
    where?: Credit_memosWhereInput | undefined;
    orderBy?: Credit_memosOrderByWithRelationInput[] | undefined;
    cursor?: Credit_memosWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"credit_memo" | "order_number" | "created" | "bill_to_name" | "status" | "refunded" | "action" | "id" | "cust_id" | "prod_id"> | undefined;
}
