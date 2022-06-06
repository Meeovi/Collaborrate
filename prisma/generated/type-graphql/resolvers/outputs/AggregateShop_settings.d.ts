import { Shop_settingsAvgAggregate } from "../outputs/Shop_settingsAvgAggregate";
import { Shop_settingsCountAggregate } from "../outputs/Shop_settingsCountAggregate";
import { Shop_settingsMaxAggregate } from "../outputs/Shop_settingsMaxAggregate";
import { Shop_settingsMinAggregate } from "../outputs/Shop_settingsMinAggregate";
import { Shop_settingsSumAggregate } from "../outputs/Shop_settingsSumAggregate";
export declare class AggregateShop_settings {
    _count: Shop_settingsCountAggregate | null;
    _avg: Shop_settingsAvgAggregate | null;
    _sum: Shop_settingsSumAggregate | null;
    _min: Shop_settingsMinAggregate | null;
    _max: Shop_settingsMaxAggregate | null;
}
