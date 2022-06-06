import { General_settingsAvgAggregate } from "../outputs/General_settingsAvgAggregate";
import { General_settingsCountAggregate } from "../outputs/General_settingsCountAggregate";
import { General_settingsMaxAggregate } from "../outputs/General_settingsMaxAggregate";
import { General_settingsMinAggregate } from "../outputs/General_settingsMinAggregate";
import { General_settingsSumAggregate } from "../outputs/General_settingsSumAggregate";
export declare class General_settingsGroupBy {
    id: bigint;
    created_at: Date | null;
    title: string | null;
    tagline: string | null;
    url: string | null;
    email: string | null;
    access_restrictions: string | null;
    restriction_mode: string | null;
    startup_page: string | null;
    landing_page: string | null;
    http_response: string | null;
    store_email: string | null;
    store_contact: string | null;
    store_contact_two: string | null;
    customer_support: string | null;
    _count: General_settingsCountAggregate | null;
    _avg: General_settingsAvgAggregate | null;
    _sum: General_settingsSumAggregate | null;
    _min: General_settingsMinAggregate | null;
    _max: General_settingsMaxAggregate | null;
}
