import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCart_price_rulesArgs } from "./args/UpdateManyCart_price_rulesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCart_price_rulesResolver {
    updateManyCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCart_price_rulesArgs): Promise<AffectedRowsOutput>;
}
