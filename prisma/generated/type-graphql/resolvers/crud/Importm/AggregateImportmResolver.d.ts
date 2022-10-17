import { GraphQLResolveInfo } from "graphql";
import { AggregateImportmArgs } from "./args/AggregateImportmArgs";
import { AggregateImportm } from "../../outputs/AggregateImportm";
export declare class AggregateImportmResolver {
    aggregateImportm(ctx: any, info: GraphQLResolveInfo, args: AggregateImportmArgs): Promise<AggregateImportm>;
}
