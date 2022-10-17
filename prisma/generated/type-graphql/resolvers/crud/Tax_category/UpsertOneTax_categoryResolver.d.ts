import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTax_categoryArgs } from "./args/UpsertOneTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
export declare class UpsertOneTax_categoryResolver {
    upsertOneTax_category(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTax_categoryArgs): Promise<Tax_category>;
}
