import { GraphQLResolveInfo } from "graphql";
import { DeleteManyInternalizationArgs } from "./args/DeleteManyInternalizationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInternalizationResolver {
    deleteManyInternalization(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInternalizationArgs): Promise<AffectedRowsOutput>;
}
