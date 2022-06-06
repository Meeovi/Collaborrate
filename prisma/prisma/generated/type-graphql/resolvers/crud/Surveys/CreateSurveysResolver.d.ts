import { GraphQLResolveInfo } from "graphql";
import { CreateSurveysArgs } from "./args/CreateSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class CreateSurveysResolver {
    createSurveys(ctx: any, info: GraphQLResolveInfo, args: CreateSurveysArgs): Promise<Surveys>;
}
