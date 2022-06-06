import { GraphQLResolveInfo } from "graphql";
import { UpsertCategoriesArgs } from "./args/UpsertCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class UpsertCategoriesResolver {
    upsertCategories(ctx: any, info: GraphQLResolveInfo, args: UpsertCategoriesArgs): Promise<Categories>;
}
