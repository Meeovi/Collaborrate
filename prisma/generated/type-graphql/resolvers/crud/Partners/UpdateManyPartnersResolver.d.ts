import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPartnersArgs } from "./args/UpdateManyPartnersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPartnersResolver {
    updateManyPartners(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPartnersArgs): Promise<AffectedRowsOutput>;
}
