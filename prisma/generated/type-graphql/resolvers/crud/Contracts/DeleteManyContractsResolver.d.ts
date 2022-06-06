import { GraphQLResolveInfo } from "graphql";
import { DeleteManyContractsArgs } from "./args/DeleteManyContractsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyContractsResolver {
    deleteManyContracts(ctx: any, info: GraphQLResolveInfo, args: DeleteManyContractsArgs): Promise<AffectedRowsOutput>;
}
