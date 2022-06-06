import { GraphQLResolveInfo } from "graphql";
import { GroupByGift_certificatesArgs } from "./args/GroupByGift_certificatesArgs";
import { Gift_certificatesGroupBy } from "../../outputs/Gift_certificatesGroupBy";
export declare class GroupByGift_certificatesResolver {
    groupByGift_certificates(ctx: any, info: GraphQLResolveInfo, args: GroupByGift_certificatesArgs): Promise<Gift_certificatesGroupBy[]>;
}
