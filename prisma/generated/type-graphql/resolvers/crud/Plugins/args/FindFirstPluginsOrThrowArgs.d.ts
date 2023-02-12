import { PluginsOrderByWithRelationInput } from "../../../inputs/PluginsOrderByWithRelationInput";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";
import { PluginsWhereUniqueInput } from "../../../inputs/PluginsWhereUniqueInput";
export declare class FindFirstPluginsOrThrowArgs {
    where?: PluginsWhereInput | undefined;
    orderBy?: PluginsOrderByWithRelationInput[] | undefined;
    cursor?: PluginsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "url" | "github_link" | "description" | "logo" | "screenshots" | "last_updated" | "publisher_name" | "agree_terms" | "publisher_email"> | undefined;
}
