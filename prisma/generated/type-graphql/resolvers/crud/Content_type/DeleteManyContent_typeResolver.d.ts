import { GraphQLResolveInfo } from "graphql";
import { DeleteManyContent_typeArgs } from "./args/DeleteManyContent_typeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyContent_typeResolver {
    deleteManyContent_type(ctx: any, info: GraphQLResolveInfo, args: DeleteManyContent_typeArgs): Promise<AffectedRowsOutput>;
}
