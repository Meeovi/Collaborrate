import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCurrenciesArgs } from "./args/DeleteOneCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
export declare class DeleteOneCurrenciesResolver {
    deleteOneCurrencies(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCurrenciesArgs): Promise<Currencies | null>;
}
