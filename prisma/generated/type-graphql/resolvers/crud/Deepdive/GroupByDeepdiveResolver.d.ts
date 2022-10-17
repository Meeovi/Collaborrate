import { GraphQLResolveInfo } from "graphql";
import { GroupByDeepdiveArgs } from "./args/GroupByDeepdiveArgs";
import { DeepdiveGroupBy } from "../../outputs/DeepdiveGroupBy";
export declare class GroupByDeepdiveResolver {
    groupByDeepdive(ctx: any, info: GraphQLResolveInfo, args: GroupByDeepdiveArgs): Promise<DeepdiveGroupBy[]>;
}
