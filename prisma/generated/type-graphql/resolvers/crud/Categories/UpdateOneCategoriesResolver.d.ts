import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCategoriesArgs } from "./args/UpdateOneCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class UpdateOneCategoriesResolver {
    updateOneCategories(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCategoriesArgs): Promise<Categories | null>;
}
