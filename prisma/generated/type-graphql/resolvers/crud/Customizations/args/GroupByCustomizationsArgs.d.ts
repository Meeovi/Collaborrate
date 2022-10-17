import { CustomizationsOrderByWithAggregationInput } from "../../../inputs/CustomizationsOrderByWithAggregationInput";
import { CustomizationsScalarWhereWithAggregatesInput } from "../../../inputs/CustomizationsScalarWhereWithAggregatesInput";
import { CustomizationsWhereInput } from "../../../inputs/CustomizationsWhereInput";
export declare class GroupByCustomizationsArgs {
    where?: CustomizationsWhereInput | undefined;
    orderBy?: CustomizationsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "site_name" | "nav_link" | "notification" | "banner" | "footer_link" | "announcement" | "email" | "site_url" | "allow_signup">;
    having?: CustomizationsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
