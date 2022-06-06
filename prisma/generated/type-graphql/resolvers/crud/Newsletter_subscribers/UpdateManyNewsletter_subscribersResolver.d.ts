import { GraphQLResolveInfo } from "graphql";
import { UpdateManyNewsletter_subscribersArgs } from "./args/UpdateManyNewsletter_subscribersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyNewsletter_subscribersResolver {
    updateManyNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: UpdateManyNewsletter_subscribersArgs): Promise<AffectedRowsOutput>;
}
