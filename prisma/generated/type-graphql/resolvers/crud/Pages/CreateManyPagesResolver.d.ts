import { GraphQLResolveInfo } from "graphql";
import { CreateManyPagesArgs } from "./args/CreateManyPagesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPagesResolver {
    createManyPages(ctx: any, info: GraphQLResolveInfo, args: CreateManyPagesArgs): Promise<AffectedRowsOutput>;
}
