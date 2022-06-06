import { GraphQLResolveInfo } from "graphql";
import { CreateCatalog_price_ruleArgs } from "./args/CreateCatalog_price_ruleArgs";
import { Catalog_price_rule } from "../../../models/Catalog_price_rule";
export declare class CreateCatalog_price_ruleResolver {
    createCatalog_price_rule(ctx: any, info: GraphQLResolveInfo, args: CreateCatalog_price_ruleArgs): Promise<Catalog_price_rule>;
}
