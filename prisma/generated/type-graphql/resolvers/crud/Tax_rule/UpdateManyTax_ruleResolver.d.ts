import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTax_ruleArgs } from "./args/UpdateManyTax_ruleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTax_ruleResolver {
    updateManyTax_rule(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTax_ruleArgs): Promise<AffectedRowsOutput>;
}
