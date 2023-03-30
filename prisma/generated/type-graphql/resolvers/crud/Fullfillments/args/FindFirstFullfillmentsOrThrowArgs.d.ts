import { FullfillmentsOrderByWithRelationInput } from "../../../inputs/FullfillmentsOrderByWithRelationInput";
import { FullfillmentsWhereInput } from "../../../inputs/FullfillmentsWhereInput";
import { FullfillmentsWhereUniqueInput } from "../../../inputs/FullfillmentsWhereUniqueInput";
export declare class FindFirstFullfillmentsOrThrowArgs {
    where?: FullfillmentsWhereInput | undefined;
    orderBy?: FullfillmentsOrderByWithRelationInput[] | undefined;
    cursor?: FullfillmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "shipping_zones" | "company" | "address" | "address_two" | "city" | "state" | "zipcode" | "country" | "country_area" | "phone" | "pickup" | "stock"> | undefined;
}
