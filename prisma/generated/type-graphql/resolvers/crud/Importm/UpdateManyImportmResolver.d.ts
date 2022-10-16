import { GraphQLResolveInfo } from "graphql";
import { UpdateManyImportmArgs } from "./args/UpdateManyImportmArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyImportmResolver {
    updateManyImportm(ctx: any, info: GraphQLResolveInfo, args: UpdateManyImportmArgs): Promise<AffectedRowsOutput>;
}
