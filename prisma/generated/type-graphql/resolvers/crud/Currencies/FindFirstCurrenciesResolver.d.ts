import { GraphQLResolveInfo } from "graphql";
import { FindFirstCurrenciesArgs } from "./args/FindFirstCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
export declare class FindFirstCurrenciesResolver {
    findFirstCurrencies(ctx: any, info: GraphQLResolveInfo, args: FindFirstCurrenciesArgs): Promise<Currencies | null>;
}
