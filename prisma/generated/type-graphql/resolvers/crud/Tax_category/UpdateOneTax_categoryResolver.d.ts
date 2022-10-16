import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTax_categoryArgs } from "./args/UpdateOneTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
export declare class UpdateOneTax_categoryResolver {
    updateOneTax_category(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTax_categoryArgs): Promise<Tax_category | null>;
}
