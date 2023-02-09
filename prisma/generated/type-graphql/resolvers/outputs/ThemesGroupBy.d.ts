import { ThemesAvgAggregate } from "../outputs/ThemesAvgAggregate";
import { ThemesCountAggregate } from "../outputs/ThemesCountAggregate";
import { ThemesMaxAggregate } from "../outputs/ThemesMaxAggregate";
import { ThemesMinAggregate } from "../outputs/ThemesMinAggregate";
import { ThemesSumAggregate } from "../outputs/ThemesSumAggregate";
export declare class ThemesGroupBy {
    id: number;
    title: string | null;
    parent_theme: string | null;
    theme_path: string | null;
    action: string | null;
    website_id: bigint;
    websites: string;
    _count: ThemesCountAggregate | null;
    _avg: ThemesAvgAggregate | null;
    _sum: ThemesSumAggregate | null;
    _min: ThemesMinAggregate | null;
    _max: ThemesMaxAggregate | null;
}
