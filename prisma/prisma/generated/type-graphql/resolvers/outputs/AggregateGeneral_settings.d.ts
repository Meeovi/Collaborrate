import { General_settingsAvgAggregate } from "../outputs/General_settingsAvgAggregate";
import { General_settingsCountAggregate } from "../outputs/General_settingsCountAggregate";
import { General_settingsMaxAggregate } from "../outputs/General_settingsMaxAggregate";
import { General_settingsMinAggregate } from "../outputs/General_settingsMinAggregate";
import { General_settingsSumAggregate } from "../outputs/General_settingsSumAggregate";
export declare class AggregateGeneral_settings {
    _count: General_settingsCountAggregate | null;
    _avg: General_settingsAvgAggregate | null;
    _sum: General_settingsSumAggregate | null;
    _min: General_settingsMinAggregate | null;
    _max: General_settingsMaxAggregate | null;
}
