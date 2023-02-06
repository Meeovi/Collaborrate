import { GraphQLResolveInfo } from "graphql";
import { CreateManyPaymentsArgs } from "./args/CreateManyPaymentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPaymentsResolver {
    createManyPayments(ctx: any, info: GraphQLResolveInfo, args: CreateManyPaymentsArgs): Promise<AffectedRowsOutput>;
}
