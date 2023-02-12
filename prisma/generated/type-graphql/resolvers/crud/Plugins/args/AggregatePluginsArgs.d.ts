import { PluginsOrderByWithRelationInput } from "../../../inputs/PluginsOrderByWithRelationInput";
import { PluginsWhereInput } from "../../../inputs/PluginsWhereInput";
import { PluginsWhereUniqueInput } from "../../../inputs/PluginsWhereUniqueInput";
export declare class AggregatePluginsArgs {
    where?: PluginsWhereInput | undefined;
    orderBy?: PluginsOrderByWithRelationInput[] | undefined;
    cursor?: PluginsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
