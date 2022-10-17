import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDeepdiveArgs } from "./args/DeleteManyDeepdiveArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDeepdiveResolver {
    deleteManyDeepdive(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDeepdiveArgs): Promise<AffectedRowsOutput>;
}
