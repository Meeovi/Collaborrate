import { GraphQLResolveInfo } from "graphql";
import { GroupByStatesArgs } from "./args/GroupByStatesArgs";
import { StatesGroupBy } from "../../outputs/StatesGroupBy";
export declare class GroupByStatesResolver {
    groupByStates(ctx: any, info: GraphQLResolveInfo, args: GroupByStatesArgs): Promise<StatesGroupBy[]>;
}
