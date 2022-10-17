import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTax_ruleArgs } from "./args/DeleteManyTax_ruleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTax_ruleResolver {
    deleteManyTax_rule(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTax_ruleArgs): Promise<AffectedRowsOutput>;
}
