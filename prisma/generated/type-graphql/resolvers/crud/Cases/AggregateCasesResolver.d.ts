import { GraphQLResolveInfo } from "graphql";
import { AggregateCasesArgs } from "./args/AggregateCasesArgs";
import { AggregateCases } from "../../outputs/AggregateCases";
export declare class AggregateCasesResolver {
    aggregateCases(ctx: any, info: GraphQLResolveInfo, args: AggregateCasesArgs): Promise<AggregateCases>;
}
