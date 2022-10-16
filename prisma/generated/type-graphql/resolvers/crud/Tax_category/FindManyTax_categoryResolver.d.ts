import { GraphQLResolveInfo } from "graphql";
import { FindManyTax_categoryArgs } from "./args/FindManyTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
export declare class FindManyTax_categoryResolver {
    tax_categories(ctx: any, info: GraphQLResolveInfo, args: FindManyTax_categoryArgs): Promise<Tax_category[]>;
}
