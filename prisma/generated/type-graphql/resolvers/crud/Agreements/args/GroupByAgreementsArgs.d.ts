import { AgreementsOrderByWithAggregationInput } from "../../../inputs/AgreementsOrderByWithAggregationInput";
import { AgreementsScalarWhereWithAggregatesInput } from "../../../inputs/AgreementsScalarWhereWithAggregatesInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";
export declare class GroupByAgreementsArgs {
    where?: AgreementsWhereInput | undefined;
    orderBy?: AgreementsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "reference_id" | "created" | "updated" | "content" | "name" | "image" | "excerpt" | "type" | "user_id" | "shop_id" | "mediamanager">;
    having?: AgreementsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
