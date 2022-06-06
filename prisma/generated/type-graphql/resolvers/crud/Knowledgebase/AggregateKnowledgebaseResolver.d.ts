import { GraphQLResolveInfo } from "graphql";
import { AggregateKnowledgebaseArgs } from "./args/AggregateKnowledgebaseArgs";
import { AggregateKnowledgebase } from "../../outputs/AggregateKnowledgebase";
export declare class AggregateKnowledgebaseResolver {
    aggregateKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: AggregateKnowledgebaseArgs): Promise<AggregateKnowledgebase>;
}
