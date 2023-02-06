import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCurrenciesOrThrowArgs } from "./args/FindUniqueCurrenciesOrThrowArgs";
import { Currencies } from "../../../models/Currencies";
export declare class FindUniqueCurrenciesOrThrowResolver {
    findUniqueCurrenciesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCurrenciesOrThrowArgs): Promise<Currencies | null>;
}
