import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAgreementsArgs } from "./args/DeleteManyAgreementsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAgreementsResolver {
    deleteManyAgreements(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAgreementsArgs): Promise<AffectedRowsOutput>;
}
