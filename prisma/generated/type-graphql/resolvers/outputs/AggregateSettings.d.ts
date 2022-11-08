import { SettingsAvgAggregate } from "../outputs/SettingsAvgAggregate";
import { SettingsCountAggregate } from "../outputs/SettingsCountAggregate";
import { SettingsMaxAggregate } from "../outputs/SettingsMaxAggregate";
import { SettingsMinAggregate } from "../outputs/SettingsMinAggregate";
import { SettingsSumAggregate } from "../outputs/SettingsSumAggregate";
export declare class AggregateSettings {
    _count: SettingsCountAggregate | null;
    _avg: SettingsAvgAggregate | null;
    _sum: SettingsSumAggregate | null;
    _min: SettingsMinAggregate | null;
    _max: SettingsMaxAggregate | null;
}
