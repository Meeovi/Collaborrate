import { GraphQLResolveInfo } from "graphql";
import { CreateManyTax_rateArgs } from "./args/CreateManyTax_rateArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTax_rateResolver {
    createManyTax_rate(ctx: any, info: GraphQLResolveInfo, args: CreateManyTax_rateArgs): Promise<AffectedRowsOutput>;
}
