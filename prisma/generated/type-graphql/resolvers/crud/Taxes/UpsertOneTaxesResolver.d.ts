import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTaxesArgs } from "./args/UpsertOneTaxesArgs";
import { Taxes } from "../../../models/Taxes";
export declare class UpsertOneTaxesResolver {
    upsertOneTaxes(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTaxesArgs): Promise<Taxes>;
}
