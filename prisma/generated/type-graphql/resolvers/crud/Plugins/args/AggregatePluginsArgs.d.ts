import { PluginsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PluginsOrderByWithRelationAndSearchRelevanceInput";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";
import { PluginsWhereUniqueInput } from "../../../inputs/PluginsWhereUniqueInput";
export declare class AggregatePluginsArgs {
    where?: PluginsWhereInput | undefined;
    orderBy?: PluginsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PluginsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
