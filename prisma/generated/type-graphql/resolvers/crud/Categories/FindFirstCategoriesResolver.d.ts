import { GraphQLResolveInfo } from "graphql";
import { FindFirstCategoriesArgs } from "./args/FindFirstCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class FindFirstCategoriesResolver {
    findFirstCategories(ctx: any, info: GraphQLResolveInfo, args: FindFirstCategoriesArgs): Promise<Categories | null>;
}
