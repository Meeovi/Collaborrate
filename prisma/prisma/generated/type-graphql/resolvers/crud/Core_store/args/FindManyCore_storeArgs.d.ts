import { Core_storeOrderByWithRelationInput } from "../../../inputs/Core_storeOrderByWithRelationInput";
import { Core_storeWhereInput } from "../../../inputs/Core_storeWhereInput";
import { Core_storeWhereUniqueInput } from "../../../inputs/Core_storeWhereUniqueInput";
export declare class FindManyCore_storeArgs {
    where?: Core_storeWhereInput | undefined;
    orderBy?: Core_storeOrderByWithRelationInput[] | undefined;
    cursor?: Core_storeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "key" | "value" | "type" | "environment" | "tag"> | undefined;
}
