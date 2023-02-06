import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCategoriesArgs } from "./args/DeleteOneCategoriesArgs";
import { Categories } from "../../../models/Categories";
export declare class DeleteOneCategoriesResolver {
    deleteOneCategories(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCategoriesArgs): Promise<Categories | null>;
}
