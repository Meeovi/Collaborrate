import { GraphQLResolveInfo } from "graphql";
import { GroupByTrainingsArgs } from "./args/GroupByTrainingsArgs";
import { TrainingsGroupBy } from "../../outputs/TrainingsGroupBy";
export declare class GroupByTrainingsResolver {
    groupByTrainings(ctx: any, info: GraphQLResolveInfo, args: GroupByTrainingsArgs): Promise<TrainingsGroupBy[]>;
}
