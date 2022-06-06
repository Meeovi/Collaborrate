import { GraphQLResolveInfo } from "graphql";
import { CreateManyContractsArgs } from "./args/CreateManyContractsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyContractsResolver {
    createManyContracts(ctx: any, info: GraphQLResolveInfo, args: CreateManyContractsArgs): Promise<AffectedRowsOutput>;
}
