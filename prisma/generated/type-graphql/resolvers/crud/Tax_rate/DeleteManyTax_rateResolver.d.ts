import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTax_rateArgs } from "./args/DeleteManyTax_rateArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTax_rateResolver {
    deleteManyTax_rate(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTax_rateArgs): Promise<AffectedRowsOutput>;
}
