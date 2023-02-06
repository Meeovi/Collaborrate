import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProduct_typesArgs } from "./args/DeleteManyProduct_typesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProduct_typesResolver {
    deleteManyProduct_types(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProduct_typesArgs): Promise<AffectedRowsOutput>;
}
