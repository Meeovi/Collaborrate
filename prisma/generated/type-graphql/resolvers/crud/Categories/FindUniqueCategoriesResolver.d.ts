import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoriesArgs } from "./args/FindUniqueCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class FindUniqueCategoriesResolver {
    findUniqueCategories(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCategoriesArgs): Promise<Categories | null>;
}
