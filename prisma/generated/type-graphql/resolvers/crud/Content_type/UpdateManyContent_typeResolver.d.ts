import { GraphQLResolveInfo } from "graphql";
import { UpdateManyContent_typeArgs } from "./args/UpdateManyContent_typeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyContent_typeResolver {
    updateManyContent_type(ctx: any, info: GraphQLResolveInfo, args: UpdateManyContent_typeArgs): Promise<AffectedRowsOutput>;
}
