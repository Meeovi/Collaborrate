import { Sales_settingsAvgAggregate } from "../outputs/Sales_settingsAvgAggregate";
import { Sales_settingsCountAggregate } from "../outputs/Sales_settingsCountAggregate";
import { Sales_settingsMaxAggregate } from "../outputs/Sales_settingsMaxAggregate";
import { Sales_settingsMinAggregate } from "../outputs/Sales_settingsMinAggregate";
import { Sales_settingsSumAggregate } from "../outputs/Sales_settingsSumAggregate";
export declare class AggregateSales_settings {
    _count: Sales_settingsCountAggregate | null;
    _avg: Sales_settingsAvgAggregate | null;
    _sum: Sales_settingsSumAggregate | null;
    _min: Sales_settingsMinAggregate | null;
    _max: Sales_settingsMaxAggregate | null;
}
