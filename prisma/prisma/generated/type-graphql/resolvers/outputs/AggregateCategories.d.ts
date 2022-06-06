import { CategoriesAvgAggregate } from "../outputs/CategoriesAvgAggregate";
import { CategoriesCountAggregate } from "../outputs/CategoriesCountAggregate";
import { CategoriesMaxAggregate } from "../outputs/CategoriesMaxAggregate";
import { CategoriesMinAggregate } from "../outputs/CategoriesMinAggregate";
import { CategoriesSumAggregate } from "../outputs/CategoriesSumAggregate";
export declare class AggregateCategories {
    _count: CategoriesCountAggregate | null;
    _avg: CategoriesAvgAggregate | null;
    _sum: CategoriesSumAggregate | null;
    _min: CategoriesMinAggregate | null;
    _max: CategoriesMaxAggregate | null;
}
