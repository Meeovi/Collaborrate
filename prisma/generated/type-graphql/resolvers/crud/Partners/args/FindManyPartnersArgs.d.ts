import { PartnersOrderByWithRelationInput } from "../../../inputs/PartnersOrderByWithRelationInput";
import { PartnersWhereInput } from "../../../inputs/PartnersWhereInput";
import { PartnersWhereUniqueInput } from "../../../inputs/PartnersWhereUniqueInput";
export declare class FindManyPartnersArgs {
    where?: PartnersWhereInput | undefined;
    orderBy?: PartnersOrderByWithRelationInput[] | undefined;
    cursor?: PartnersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "address" | "city" | "state" | "country" | "isPublic" | "business_type"> | undefined;
}
