import { PluginsAvgAggregate } from "../outputs/PluginsAvgAggregate";
import { PluginsCountAggregate } from "../outputs/PluginsCountAggregate";
import { PluginsMaxAggregate } from "../outputs/PluginsMaxAggregate";
import { PluginsMinAggregate } from "../outputs/PluginsMinAggregate";
import { PluginsSumAggregate } from "../outputs/PluginsSumAggregate";
export declare class AggregatePlugins {
    _count: PluginsCountAggregate | null;
    _avg: PluginsAvgAggregate | null;
    _sum: PluginsSumAggregate | null;
    _min: PluginsMinAggregate | null;
    _max: PluginsMaxAggregate | null;
}
