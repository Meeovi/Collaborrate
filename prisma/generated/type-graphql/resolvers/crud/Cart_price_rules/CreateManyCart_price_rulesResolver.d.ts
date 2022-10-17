import { GraphQLResolveInfo } from "graphql";
import { CreateManyCart_price_rulesArgs } from "./args/CreateManyCart_price_rulesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCart_price_rulesResolver {
    createManyCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: CreateManyCart_price_rulesArgs): Promise<AffectedRowsOutput>;
}
