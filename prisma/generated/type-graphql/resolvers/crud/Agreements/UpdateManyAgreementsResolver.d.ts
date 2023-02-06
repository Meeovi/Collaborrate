import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAgreementsArgs } from "./args/UpdateManyAgreementsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAgreementsResolver {
    updateManyAgreements(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAgreementsArgs): Promise<AffectedRowsOutput>;
}
