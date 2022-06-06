import { GraphQLResolveInfo } from "graphql";
import { UpdateManyContractsArgs } from "./args/UpdateManyContractsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyContractsResolver {
    updateManyContracts(ctx: any, info: GraphQLResolveInfo, args: UpdateManyContractsArgs): Promise<AffectedRowsOutput>;
}
