import { GraphQLResolveInfo } from "graphql";
import { AggregateTax_categoryArgs } from "./args/AggregateTax_categoryArgs";
import { AggregateTax_category } from "../../outputs/AggregateTax_category";
export declare class AggregateTax_categoryResolver {
    aggregateTax_category(ctx: any, info: GraphQLResolveInfo, args: AggregateTax_categoryArgs): Promise<AggregateTax_category>;
}
