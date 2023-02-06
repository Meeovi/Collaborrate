import { GraphQLResolveInfo } from "graphql";
import { GroupByAttributesArgs } from "./args/GroupByAttributesArgs";
import { AttributesGroupBy } from "../../outputs/AttributesGroupBy";
export declare class GroupByAttributesResolver {
    groupByAttributes(ctx: any, info: GraphQLResolveInfo, args: GroupByAttributesArgs): Promise<AttributesGroupBy[]>;
}
