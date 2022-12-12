import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPaymentsArgs } from "./args/UpdateManyPaymentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPaymentsResolver {
    updateManyPayments(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPaymentsArgs): Promise<AffectedRowsOutput>;
}
