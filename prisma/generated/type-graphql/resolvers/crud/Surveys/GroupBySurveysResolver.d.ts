import { GraphQLResolveInfo } from "graphql";
import { GroupBySurveysArgs } from "./args/GroupBySurveysArgs";
import { SurveysGroupBy } from "../../outputs/SurveysGroupBy";
export declare class GroupBySurveysResolver {
    groupBySurveys(ctx: any, info: GraphQLResolveInfo, args: GroupBySurveysArgs): Promise<SurveysGroupBy[]>;
}
