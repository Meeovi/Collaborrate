import { GraphQLResolveInfo } from "graphql";
import { DeleteManyImportmArgs } from "./args/DeleteManyImportmArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyImportmResolver {
    deleteManyImportm(ctx: any, info: GraphQLResolveInfo, args: DeleteManyImportmArgs): Promise<AffectedRowsOutput>;
}
