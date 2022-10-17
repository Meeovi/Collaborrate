import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSurveysArgs } from "./args/UpdateOneSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class UpdateOneSurveysResolver {
    updateOneSurveys(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSurveysArgs): Promise<Surveys | null>;
}
