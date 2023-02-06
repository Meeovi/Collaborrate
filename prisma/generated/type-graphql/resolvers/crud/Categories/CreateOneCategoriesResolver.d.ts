import { GraphQLResolveInfo } from "graphql";
import { CreateOneCategoriesArgs } from "./args/CreateOneCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class CreateOneCategoriesResolver {
    createOneCategories(ctx: any, info: GraphQLResolveInfo, args: CreateOneCategoriesArgs): Promise<Categories>;
}
