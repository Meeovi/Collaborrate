import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoriesOrThrowArgs } from "./args/FindUniqueCategoriesOrThrowArgs";
import { Categories } from "../../../models/Categories";
export declare class FindUniqueCategoriesOrThrowResolver {
    findUniqueCategoriesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCategoriesOrThrowArgs): Promise<Categories | null>;
}
