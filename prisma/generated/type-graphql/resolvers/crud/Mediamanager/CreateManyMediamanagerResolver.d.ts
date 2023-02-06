import { GraphQLResolveInfo } from "graphql";
import { CreateManyMediamanagerArgs } from "./args/CreateManyMediamanagerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMediamanagerResolver {
    createManyMediamanager(ctx: any, info: GraphQLResolveInfo, args: CreateManyMediamanagerArgs): Promise<AffectedRowsOutput>;
}
