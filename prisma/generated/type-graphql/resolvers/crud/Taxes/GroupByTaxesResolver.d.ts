import { GraphQLResolveInfo } from "graphql";
import { GroupByTaxesArgs } from "./args/GroupByTaxesArgs";
import { TaxesGroupBy } from "../../outputs/TaxesGroupBy";
export declare class GroupByTaxesResolver {
    groupByTaxes(ctx: any, info: GraphQLResolveInfo, args: GroupByTaxesArgs): Promise<TaxesGroupBy[]>;
}
