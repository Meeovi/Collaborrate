import { GraphQLResolveInfo } from "graphql";
import { UpsertSurveysArgs } from "./args/UpsertSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class UpsertSurveysResolver {
    upsertSurveys(ctx: any, info: GraphQLResolveInfo, args: UpsertSurveysArgs): Promise<Surveys>;
}
