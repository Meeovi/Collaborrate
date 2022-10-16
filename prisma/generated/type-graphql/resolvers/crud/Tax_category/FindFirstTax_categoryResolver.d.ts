import { GraphQLResolveInfo } from "graphql";
import { FindFirstTax_categoryArgs } from "./args/FindFirstTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
export declare class FindFirstTax_categoryResolver {
    findFirstTax_category(ctx: any, info: GraphQLResolveInfo, args: FindFirstTax_categoryArgs): Promise<Tax_category | null>;
}
