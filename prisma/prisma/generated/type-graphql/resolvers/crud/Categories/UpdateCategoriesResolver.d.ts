import { GraphQLResolveInfo } from "graphql";
import { UpdateCategoriesArgs } from "./args/UpdateCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class UpdateCategoriesResolver {
    updateCategories(ctx: any, info: GraphQLResolveInfo, args: UpdateCategoriesArgs): Promise<Categories | null>;
}
