import { GraphQLResolveInfo } from "graphql";
import { CreateManyPartnersArgs } from "./args/CreateManyPartnersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPartnersResolver {
    createManyPartners(ctx: any, info: GraphQLResolveInfo, args: CreateManyPartnersArgs): Promise<AffectedRowsOutput>;
}
