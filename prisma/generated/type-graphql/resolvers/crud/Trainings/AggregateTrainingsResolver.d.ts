import { GraphQLResolveInfo } from "graphql";
import { AggregateTrainingsArgs } from "./args/AggregateTrainingsArgs";
import { AggregateTrainings } from "../../outputs/AggregateTrainings";
export declare class AggregateTrainingsResolver {
    aggregateTrainings(ctx: any, info: GraphQLResolveInfo, args: AggregateTrainingsArgs): Promise<AggregateTrainings>;
}
