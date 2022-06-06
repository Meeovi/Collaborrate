import { GraphQLResolveInfo } from "graphql";
import { AggregateSurveysArgs } from "./args/AggregateSurveysArgs";
import { AggregateSurveys } from "../../outputs/AggregateSurveys";
export declare class AggregateSurveysResolver {
    aggregateSurveys(ctx: any, info: GraphQLResolveInfo, args: AggregateSurveysArgs): Promise<AggregateSurveys>;
}
