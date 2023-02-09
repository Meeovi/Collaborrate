import { AgreementsOrderByWithAggregationInput } from "../../../inputs/AgreementsOrderByWithAggregationInput";
import { AgreementsScalarWhereWithAggregatesInput } from "../../../inputs/AgreementsScalarWhereWithAggregatesInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";
export declare class GroupByAgreementsArgs {
    where?: AgreementsWhereInput | undefined;
    orderBy?: AgreementsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "type" | "content" | "created" | "excerpt" | "image" | "mediamanager" | "reference_id" | "shop_id" | "updated" | "user_id">;
    having?: AgreementsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
