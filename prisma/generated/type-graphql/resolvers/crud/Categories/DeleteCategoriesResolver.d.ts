import { GraphQLResolveInfo } from "graphql";
import { DeleteCategoriesArgs } from "./args/DeleteCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class DeleteCategoriesResolver {
    deleteCategories(ctx: any, info: GraphQLResolveInfo, args: DeleteCategoriesArgs): Promise<Categories | null>;
}
