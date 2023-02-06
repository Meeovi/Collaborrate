import { GraphQLResolveInfo } from "graphql";
import { FindManyCurrenciesArgs } from "./args/FindManyCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
export declare class FindManyCurrenciesResolver {
    findManyCurrencies(ctx: any, info: GraphQLResolveInfo, args: FindManyCurrenciesArgs): Promise<Currencies[]>;
}
