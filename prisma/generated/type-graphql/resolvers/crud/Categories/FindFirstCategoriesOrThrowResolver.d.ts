import { GraphQLResolveInfo } from "graphql";
import { FindFirstCategoriesOrThrowArgs } from "./args/FindFirstCategoriesOrThrowArgs";
import { Categories } from "../../../models/Categories";
export declare class FindFirstCategoriesOrThrowResolver {
    findFirstCategoriesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCategoriesOrThrowArgs): Promise<Categories | null>;
}
