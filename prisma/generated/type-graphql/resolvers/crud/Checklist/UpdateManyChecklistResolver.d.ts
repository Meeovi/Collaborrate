import { GraphQLResolveInfo } from "graphql";
import { UpdateManyChecklistArgs } from "./args/UpdateManyChecklistArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyChecklistResolver {
    updateManyChecklist(ctx: any, info: GraphQLResolveInfo, args: UpdateManyChecklistArgs): Promise<AffectedRowsOutput>;
}
