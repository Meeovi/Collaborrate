import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMediamanagerArgs } from "./args/UpdateManyMediamanagerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMediamanagerResolver {
    updateManyMediamanager(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMediamanagerArgs): Promise<AffectedRowsOutput>;
}
