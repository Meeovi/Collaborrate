import { GraphQLResolveInfo } from "graphql";
import { CreateManyTax_ruleArgs } from "./args/CreateManyTax_ruleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTax_ruleResolver {
    createManyTax_rule(ctx: any, info: GraphQLResolveInfo, args: CreateManyTax_ruleArgs): Promise<AffectedRowsOutput>;
}
