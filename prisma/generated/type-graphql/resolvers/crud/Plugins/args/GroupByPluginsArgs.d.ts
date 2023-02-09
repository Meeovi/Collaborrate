import { PluginsOrderByWithAggregationInput } from "../../../inputs/PluginsOrderByWithAggregationInput";
import { PluginsScalarWhereWithAggregatesInput } from "../../../inputs/PluginsScalarWhereWithAggregatesInput";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";
export declare class GroupByPluginsArgs {
    where?: PluginsWhereInput | undefined;
    orderBy?: PluginsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "url" | "github_link" | "description" | "logo" | "screenshots" | "last_updated" | "publisher_name" | "agree_terms" | "publisher_email">;
    having?: PluginsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
