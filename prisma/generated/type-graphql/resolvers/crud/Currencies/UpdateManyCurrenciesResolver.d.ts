import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCurrenciesArgs } from "./args/UpdateManyCurrenciesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCurrenciesResolver {
    updateManyCurrencies(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCurrenciesArgs): Promise<AffectedRowsOutput>;
}
