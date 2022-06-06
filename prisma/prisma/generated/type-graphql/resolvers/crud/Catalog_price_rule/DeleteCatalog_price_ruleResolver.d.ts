import { GraphQLResolveInfo } from "graphql";
import { DeleteCatalog_price_ruleArgs } from "./args/DeleteCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class DeleteCatalog_price_ruleResolver {
    deleteCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: DeleteCatalog_price_ruleArgs): Promise<Catalog_price_rule | null>;
}
