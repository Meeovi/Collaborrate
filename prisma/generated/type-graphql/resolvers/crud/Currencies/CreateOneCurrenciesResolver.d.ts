import { GraphQLResolveInfo } from "graphql";
import { CreateOneCurrenciesArgs } from "./args/CreateOneCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
export declare class CreateOneCurrenciesResolver {
    createOneCurrencies(ctx: any, info: GraphQLResolveInfo, args: CreateOneCurrenciesArgs): Promise<Currencies>;
}
