import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMediamanagerArgs } from "./args/DeleteManyMediamanagerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMediamanagerResolver {
    deleteManyMediamanager(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMediamanagerArgs): Promise<AffectedRowsOutput>;
}
