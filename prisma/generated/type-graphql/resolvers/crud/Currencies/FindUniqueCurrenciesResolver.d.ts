import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCurrenciesArgs } from "./args/FindUniqueCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
export declare class FindUniqueCurrenciesResolver {
    findUniqueCurrencies(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCurrenciesArgs): Promise<Currencies | null>;
}
