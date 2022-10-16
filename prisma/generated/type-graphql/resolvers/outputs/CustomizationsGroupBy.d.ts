import { CustomizationsAvgAggregate } from "../outputs/CustomizationsAvgAggregate";
import { CustomizationsCountAggregate } from "../outputs/CustomizationsCountAggregate";
import { CustomizationsMaxAggregate } from "../outputs/CustomizationsMaxAggregate";
import { CustomizationsMinAggregate } from "../outputs/CustomizationsMinAggregate";
import { CustomizationsSumAggregate } from "../outputs/CustomizationsSumAggregate";
export declare class CustomizationsGroupBy {
    id: number;
    created_at: Date | null;
    site_name: string | null;
    nav_link: string | null;
    notification: string | null;
    banner: string | null;
    footer_link: string | null;
    announcement: string | null;
    email: string | null;
    site_url: string | null;
    allow_signup: string | null;
    _count: CustomizationsCountAggregate | null;
    _avg: CustomizationsAvgAggregate | null;
    _sum: CustomizationsSumAggregate | null;
    _min: CustomizationsMinAggregate | null;
    _max: CustomizationsMaxAggregate | null;
}
