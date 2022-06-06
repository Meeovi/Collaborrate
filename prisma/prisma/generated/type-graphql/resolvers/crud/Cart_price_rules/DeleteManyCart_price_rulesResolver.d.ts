import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCart_price_rulesArgs } from "./args/DeleteManyCart_price_rulesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCart_price_rulesResolver {
    deleteManyCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCart_price_rulesArgs): Promise<AffectedRowsOutput>;
}
