import { CategoriesAvgAggregate } from "../outputs/CategoriesAvgAggregate";
import { CategoriesCountAggregate } from "../outputs/CategoriesCountAggregate";
import { CategoriesMaxAggregate } from "../outputs/CategoriesMaxAggregate";
import { CategoriesMinAggregate } from "../outputs/CategoriesMinAggregate";
import { CategoriesSumAggregate } from "../outputs/CategoriesSumAggregate";
export declare class CategoriesGroupBy {
    id: number;
    thumbnail: string | null;
    name: string;
    visibility: string | null;
    status: boolean | null;
    websites: string | null;
    product: string | null;
    country: string | null;
    description: string | null;
    content: string | null;
    image: string | null;
    meta_title: string | null;
    meta_keywords: string | null;
    meta_description: string | null;
    meta_url: string | null;
    workspaces: string | null;
    _count: CategoriesCountAggregate | null;
    _avg: CategoriesAvgAggregate | null;
    _sum: CategoriesSumAggregate | null;
    _min: CategoriesMinAggregate | null;
    _max: CategoriesMaxAggregate | null;
}
