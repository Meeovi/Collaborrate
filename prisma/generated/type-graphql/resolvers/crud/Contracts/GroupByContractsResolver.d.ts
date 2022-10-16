import { GraphQLResolveInfo } from "graphql";
import { GroupByContractsArgs } from "./args/GroupByContractsArgs";
import { ContractsGroupBy } from "../../outputs/ContractsGroupBy";
export declare class GroupByContractsResolver {
    groupByContracts(ctx: any, info: GraphQLResolveInfo, args: GroupByContractsArgs): Promise<ContractsGroupBy[]>;
}
