import { GraphQLResolveInfo } from "graphql";
import { CreateCategoriesArgs } from "./args/CreateCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class CreateCategoriesResolver {
    createCategories(ctx: any, info: GraphQLResolveInfo, args: CreateCategoriesArgs): Promise<Categories>;
}
