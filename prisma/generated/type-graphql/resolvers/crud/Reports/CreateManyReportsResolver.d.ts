import { GraphQLResolveInfo } from "graphql";
import { CreateManyReportsArgs } from "./args/CreateManyReportsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReportsResolver {
    createManyReports(ctx: any, info: GraphQLResolveInfo, args: CreateManyReportsArgs): Promise<AffectedRowsOutput>;
}
