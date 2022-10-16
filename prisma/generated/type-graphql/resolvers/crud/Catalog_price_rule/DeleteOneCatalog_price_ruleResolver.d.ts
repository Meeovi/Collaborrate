import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCatalog_price_ruleArgs } from "./args/DeleteOneCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class DeleteOneCatalog_price_ruleResolver {
    deleteOneCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCatalog_price_ruleArgs): Promise<Catalog_price_rule | null>;
}
