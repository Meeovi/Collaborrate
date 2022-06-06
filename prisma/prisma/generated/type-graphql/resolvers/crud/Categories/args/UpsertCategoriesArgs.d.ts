import { CategoriesCreateInput } from "../../../inputs/CategoriesCreateInput";
import { CategoriesUpdateInput } from "../../../inputs/CategoriesUpdateInput";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";
export declare class UpsertCategoriesArgs {
    where: CategoriesWhereUniqueInput;
    create: CategoriesCreateInput;
    update: CategoriesUpdateInput;
}
