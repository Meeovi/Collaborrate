import { GraphQLResolveInfo } from "graphql";
import { DeleteManyNewsletter_subscribersArgs } from "./args/DeleteManyNewsletter_subscribersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyNewsletter_subscribersResolver {
    deleteManyNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: DeleteManyNewsletter_subscribersArgs): Promise<AffectedRowsOutput>;
}
