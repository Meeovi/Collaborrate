import { GraphQLResolveInfo } from "graphql";
import { GroupByKnowledgebaseArgs } from "./args/GroupByKnowledgebaseArgs";
import { KnowledgebaseGroupBy } from "../../outputs/KnowledgebaseGroupBy";
export declare class GroupByKnowledgebaseResolver {
    groupByKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: GroupByKnowledgebaseArgs): Promise<KnowledgebaseGroupBy[]>;
}
