import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCurrenciesArgs } from "./args/UpdateOneCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
export declare class UpdateOneCurrenciesResolver {
    updateOneCurrencies(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCurrenciesArgs): Promise<Currencies | null>;
}
