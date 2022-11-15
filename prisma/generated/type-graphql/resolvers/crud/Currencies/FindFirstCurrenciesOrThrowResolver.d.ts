import { GraphQLResolveInfo } from "graphql";
import { FindFirstCurrenciesOrThrowArgs } from "./args/FindFirstCurrenciesOrThrowArgs";
import { Currencies } from "../../../models/Currencies";
export declare class FindFirstCurrenciesOrThrowResolver {
    findFirstCurrenciesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCurrenciesOrThrowArgs): Promise<Currencies | null>;
}
