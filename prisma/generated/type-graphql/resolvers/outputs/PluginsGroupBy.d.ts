import { PluginsAvgAggregate } from "../outputs/PluginsAvgAggregate";
import { PluginsCountAggregate } from "../outputs/PluginsCountAggregate";
import { PluginsMaxAggregate } from "../outputs/PluginsMaxAggregate";
import { PluginsMinAggregate } from "../outputs/PluginsMinAggregate";
import { PluginsSumAggregate } from "../outputs/PluginsSumAggregate";
export declare class PluginsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    url: string | null;
    github_link: string | null;
    description: string | null;
    logo: string | null;
    screenshots: string | null;
    last_updated: Date | null;
    publisher_name: string | null;
    agree_terms: boolean | null;
    publisher_email: string | null;
    _count: PluginsCountAggregate | null;
    _avg: PluginsAvgAggregate | null;
    _sum: PluginsSumAggregate | null;
    _min: PluginsMinAggregate | null;
    _max: PluginsMaxAggregate | null;
}
