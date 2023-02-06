import { GraphQLResolveInfo } from "graphql";
import { CreateManyAgreementsArgs } from "./args/CreateManyAgreementsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAgreementsResolver {
    createManyAgreements(ctx: any, info: GraphQLResolveInfo, args: CreateManyAgreementsArgs): Promise<AffectedRowsOutput>;
}
