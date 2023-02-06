import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPartnersArgs } from "./args/DeleteManyPartnersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPartnersResolver {
    deleteManyPartners(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPartnersArgs): Promise<AffectedRowsOutput>;
}
