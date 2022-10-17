import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomizationsArgs } from "./args/GroupByCustomizationsArgs";
import { CustomizationsGroupBy } from "../../outputs/CustomizationsGroupBy";
export declare class GroupByCustomizationsResolver {
    groupByCustomizations(ctx: any, info: GraphQLResolveInfo, args: GroupByCustomizationsArgs): Promise<CustomizationsGroupBy[]>;
}
