import { GraphQLResolveInfo } from "graphql";
import { FindManyCategoriesArgs } from "./args/FindManyCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class FindManyCategoriesResolver {
    findManyCategories(ctx: any, info: GraphQLResolveInfo, args: FindManyCategoriesArgs): Promise<Categories[]>;
}
