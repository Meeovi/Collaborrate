import { GraphQLResolveInfo } from "graphql";
import { DeleteManyEmailsArgs } from "./args/DeleteManyEmailsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEmailsResolver {
    deleteManyEmails(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEmailsArgs): Promise<AffectedRowsOutput>;
}
