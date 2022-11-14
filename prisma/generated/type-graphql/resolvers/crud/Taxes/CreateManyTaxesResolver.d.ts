import { GraphQLResolveInfo } from "graphql";
import { CreateManyTaxesArgs } from "./args/CreateManyTaxesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTaxesResolver {
    createManyTaxes(ctx: any, info: GraphQLResolveInfo, args: CreateManyTaxesArgs): Promise<AffectedRowsOutput>;
}
