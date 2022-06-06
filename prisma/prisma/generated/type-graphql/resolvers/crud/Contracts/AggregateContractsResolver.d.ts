import { GraphQLResolveInfo } from "graphql";
import { AggregateContractsArgs } from "./args/AggregateContractsArgs";
import { AggregateContracts } from "../../outputs/AggregateContracts";
export declare class AggregateContractsResolver {
    aggregateContracts(ctx: any, info: GraphQLResolveInfo, args: AggregateContractsArgs): Promise<AggregateContracts>;
}
