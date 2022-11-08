import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCurrenciesArgs } from "./args/UpsertOneCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
export declare class UpsertOneCurrenciesResolver {
    upsertOneCurrencies(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCurrenciesArgs): Promise<Currencies>;
}
