import { GraphQLResolveInfo } from "graphql";
import { CreateManyImportmArgs } from "./args/CreateManyImportmArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyImportmResolver {
    createManyImportm(ctx: any, info: GraphQLResolveInfo, args: CreateManyImportmArgs): Promise<AffectedRowsOutput>;
}
