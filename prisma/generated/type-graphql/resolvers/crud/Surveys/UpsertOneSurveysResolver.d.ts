import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSurveysArgs } from "./args/UpsertOneSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class UpsertOneSurveysResolver {
    upsertOneSurveys(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSurveysArgs): Promise<Surveys>;
}
