import { ArticlesCreateInput } from "../../../inputs/ArticlesCreateInput";
import { ArticlesUpdateInput } from "../../../inputs/ArticlesUpdateInput";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";
export declare class UpsertArticlesArgs {
    where: ArticlesWhereUniqueInput;
    create: ArticlesCreateInput;
    update: ArticlesUpdateInput;
}
