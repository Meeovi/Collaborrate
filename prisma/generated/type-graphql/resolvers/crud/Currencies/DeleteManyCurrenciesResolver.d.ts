import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCurrenciesArgs } from "./args/DeleteManyCurrenciesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCurrenciesResolver {
    deleteManyCurrencies(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCurrenciesArgs): Promise<AffectedRowsOutput>;
}
