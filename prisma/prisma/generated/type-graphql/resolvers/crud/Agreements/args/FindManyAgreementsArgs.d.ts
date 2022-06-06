import { AgreementsOrderByWithRelationInput } from "../../../inputs/AgreementsOrderByWithRelationInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";
import { AgreementsWhereUniqueInput } from "../../../inputs/AgreementsWhereUniqueInput";
export declare class FindManyAgreementsArgs {
    where?: AgreementsWhereInput | undefined;
    orderBy?: AgreementsOrderByWithRelationInput[] | undefined;
    cursor?: AgreementsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "reference_id" | "created" | "updated" | "content" | "name" | "image" | "excerpt" | "type" | "user_id" | "shop_id"> | undefined;
}
