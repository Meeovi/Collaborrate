import { GraphQLResolveInfo } from "graphql";
import { GroupByGlossaryArgs } from "./args/GroupByGlossaryArgs";
import { GlossaryGroupBy } from "../../outputs/GlossaryGroupBy";
export declare class GroupByGlossaryResolver {
    groupByGlossary(ctx: any, info: GraphQLResolveInfo, args: GroupByGlossaryArgs): Promise<GlossaryGroupBy[]>;
}
