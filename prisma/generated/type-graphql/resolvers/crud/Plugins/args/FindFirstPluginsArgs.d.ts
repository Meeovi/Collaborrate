import { PluginsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PluginsOrderByWithRelationAndSearchRelevanceInput";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";
import { PluginsWhereUniqueInput } from "../../../inputs/PluginsWhereUniqueInput";
export declare class FindFirstPluginsArgs {
    where?: PluginsWhereInput | undefined;
    orderBy?: PluginsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PluginsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "url" | "github_link" | "description" | "logo" | "screenshots" | "last_updated" | "publisher_name" | "agree_terms" | "publisher_email"> | undefined;
}
