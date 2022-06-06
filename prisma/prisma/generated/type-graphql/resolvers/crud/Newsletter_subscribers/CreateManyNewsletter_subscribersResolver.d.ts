import { GraphQLResolveInfo } from "graphql";
import { CreateManyNewsletter_subscribersArgs } from "./args/CreateManyNewsletter_subscribersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyNewsletter_subscribersResolver {
    createManyNewsletter_subscribers(ctx: any, info: GraphQLResolveInfo, args: CreateManyNewsletter_subscribersArgs): Promise<AffectedRowsOutput>;
}
