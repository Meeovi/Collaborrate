import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCustomizationsArgs } from "./args/DeleteManyCustomizationsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCustomizationsResolver {
    deleteManyCustomizations(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCustomizationsArgs): Promise<AffectedRowsOutput>;
}
