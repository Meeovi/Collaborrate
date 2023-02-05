import { AgreementsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AgreementsOrderByWithRelationAndSearchRelevanceInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";
import { AgreementsWhereUniqueInput } from "../../../inputs/AgreementsWhereUniqueInput";
export declare class FindFirstAgreementsArgs {
    where?: AgreementsWhereInput | undefined;
    orderBy?: AgreementsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AgreementsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "type" | "content" | "created" | "excerpt" | "image" | "mediamanager" | "reference_id" | "shop_id" | "updated" | "user_id"> | undefined;
}
