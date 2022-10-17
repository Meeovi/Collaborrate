import { GraphQLResolveInfo } from "graphql";
import { CreateOneSurveysArgs } from "./args/CreateOneSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class CreateOneSurveysResolver {
    createOneSurveys(ctx: any, info: GraphQLResolveInfo, args: CreateOneSurveysArgs): Promise<Surveys>;
}
