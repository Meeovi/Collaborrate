import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTaxesArgs } from "./args/UpdateManyTaxesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTaxesResolver {
    updateManyTaxes(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTaxesArgs): Promise<AffectedRowsOutput>;
}
