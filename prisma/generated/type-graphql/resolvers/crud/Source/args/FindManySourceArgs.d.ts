import { SourceOrderByWithRelationInput } from "../../../inputs/SourceOrderByWithRelationInput";
import { SourceWhereInput } from "../../../inputs/SourceWhereInput";
import { SourceWhereUniqueInput } from "../../../inputs/SourceWhereUniqueInput";
export declare class FindManySourceArgs {
    where?: SourceWhereInput | undefined;
    orderBy?: SourceOrderByWithRelationInput[] | undefined;
    cursor?: SourceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "code" | "enabled" | "description" | "latitude" | "longitude" | "pickup_location" | "contact_name" | "email" | "phone" | "fax" | "country" | "state" | "city" | "street" | "postcode"> | undefined;
}
