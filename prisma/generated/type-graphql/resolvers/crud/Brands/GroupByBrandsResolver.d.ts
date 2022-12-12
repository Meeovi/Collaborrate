import { GraphQLResolveInfo } from "graphql";
import { GroupByBrandsArgs } from "./args/GroupByBrandsArgs";
import { BrandsGroupBy } from "../../outputs/BrandsGroupBy";
export declare class GroupByBrandsResolver {
    groupByBrands(ctx: any, info: GraphQLResolveInfo, args: GroupByBrandsArgs): Promise<BrandsGroupBy[]>;
}
