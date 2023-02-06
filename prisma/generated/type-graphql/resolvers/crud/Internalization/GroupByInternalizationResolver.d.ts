import { GraphQLResolveInfo } from "graphql";
import { GroupByInternalizationArgs } from "./args/GroupByInternalizationArgs";
import { InternalizationGroupBy } from "../../outputs/InternalizationGroupBy";
export declare class GroupByInternalizationResolver {
    groupByInternalization(ctx: any, info: GraphQLResolveInfo, args: GroupByInternalizationArgs): Promise<InternalizationGroupBy[]>;
}
