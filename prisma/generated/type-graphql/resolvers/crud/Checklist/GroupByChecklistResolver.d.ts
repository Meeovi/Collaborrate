import { GraphQLResolveInfo } from "graphql";
import { GroupByChecklistArgs } from "./args/GroupByChecklistArgs";
import { ChecklistGroupBy } from "../../outputs/ChecklistGroupBy";
export declare class GroupByChecklistResolver {
    groupByChecklist(ctx: any, info: GraphQLResolveInfo, args: GroupByChecklistArgs): Promise<ChecklistGroupBy[]>;
}
