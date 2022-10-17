import { GraphQLResolveInfo } from "graphql";
import { AggregateAgreementsArgs } from "./args/AggregateAgreementsArgs";
import { AggregateAgreements } from "../../outputs/AggregateAgreements";
export declare class AggregateAgreementsResolver {
    aggregateAgreements(ctx: any, info: GraphQLResolveInfo, args: AggregateAgreementsArgs): Promise<AggregateAgreements>;
}
