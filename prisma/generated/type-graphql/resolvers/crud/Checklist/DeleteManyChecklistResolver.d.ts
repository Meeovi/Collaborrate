import { GraphQLResolveInfo } from "graphql";
import { DeleteManyChecklistArgs } from "./args/DeleteManyChecklistArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyChecklistResolver {
    deleteManyChecklist(ctx: any, info: GraphQLResolveInfo, args: DeleteManyChecklistArgs): Promise<AffectedRowsOutput>;
}
