import { GraphQLResolveInfo } from "graphql";
import { CreateManySourceArgs } from "./args/CreateManySourceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySourceResolver {
    createManySource(ctx: any, info: GraphQLResolveInfo, args: CreateManySourceArgs): Promise<AffectedRowsOutput>;
}
