import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTax_categoryArgs } from "./args/DeleteOneTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
export declare class DeleteOneTax_categoryResolver {
    deleteOneTax_category(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTax_categoryArgs): Promise<Tax_category | null>;
}
