import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTax_rateArgs } from "./args/UpdateManyTax_rateArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTax_rateResolver {
    updateManyTax_rate(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTax_rateArgs): Promise<AffectedRowsOutput>;
}
