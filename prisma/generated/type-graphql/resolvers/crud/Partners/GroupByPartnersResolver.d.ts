import { GraphQLResolveInfo } from "graphql";
import { GroupByPartnersArgs } from "./args/GroupByPartnersArgs";
import { PartnersGroupBy } from "../../outputs/PartnersGroupBy";
export declare class GroupByPartnersResolver {
    groupByPartners(ctx: any, info: GraphQLResolveInfo, args: GroupByPartnersArgs): Promise<PartnersGroupBy[]>;
}
