import { GraphQLResolveInfo } from "graphql";
import { AggregateChecklistArgs } from "./args/AggregateChecklistArgs";
import { AggregateChecklist } from "../../outputs/AggregateChecklist";
export declare class AggregateChecklistResolver {
    aggregateChecklist(ctx: any, info: GraphQLResolveInfo, args: AggregateChecklistArgs): Promise<AggregateChecklist>;
}
