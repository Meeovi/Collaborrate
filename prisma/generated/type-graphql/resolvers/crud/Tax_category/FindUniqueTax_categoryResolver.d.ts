import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTax_categoryArgs } from "./args/FindUniqueTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
export declare class FindUniqueTax_categoryResolver {
    tax_category(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTax_categoryArgs): Promise<Tax_category | null>;
}
