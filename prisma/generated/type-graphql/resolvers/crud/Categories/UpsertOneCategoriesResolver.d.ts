import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCategoriesArgs } from "./args/UpsertOneCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class UpsertOneCategoriesResolver {
    upsertOneCategories(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCategoriesArgs): Promise<Categories>;
}
