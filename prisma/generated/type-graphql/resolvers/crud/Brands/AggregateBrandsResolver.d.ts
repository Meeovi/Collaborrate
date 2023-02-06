import { GraphQLResolveInfo } from "graphql";
import { AggregateBrandsArgs } from "./args/AggregateBrandsArgs";
import { AggregateBrands } from "../../outputs/AggregateBrands";
export declare class AggregateBrandsResolver {
    aggregateBrands(ctx: any, info: GraphQLResolveInfo, args: AggregateBrandsArgs): Promise<AggregateBrands>;
}
