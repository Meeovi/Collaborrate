import { GraphQLResolveInfo } from "graphql";
import { CreateManyCurrenciesArgs } from "./args/CreateManyCurrenciesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCurrenciesResolver {
    createManyCurrencies(ctx: any, info: GraphQLResolveInfo, args: CreateManyCurrenciesArgs): Promise<AffectedRowsOutput>;
}
