import { CustomizationsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CustomizationsOrderByWithRelationAndSearchRelevanceInput";
import { CustomizationsWhereInput } from "../../../inputs/CustomizationsWhereInput";
import { CustomizationsWhereUniqueInput } from "../../../inputs/CustomizationsWhereUniqueInput";
export declare class FindFirstCustomizationsArgs {
    where?: CustomizationsWhereInput | undefined;
    orderBy?: CustomizationsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CustomizationsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "site_name" | "nav_link" | "notification" | "banner" | "footer_link" | "announcement" | "email" | "site_url" | "allow_signup"> | undefined;
}
