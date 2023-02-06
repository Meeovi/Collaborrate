import { GraphQLResolveInfo } from "graphql";
import { GroupByAgreementsArgs } from "./args/GroupByAgreementsArgs";
import { AgreementsGroupBy } from "../../outputs/AgreementsGroupBy";
export declare class GroupByAgreementsResolver {
    groupByAgreements(ctx: any, info: GraphQLResolveInfo, args: GroupByAgreementsArgs): Promise<AgreementsGroupBy[]>;
}
