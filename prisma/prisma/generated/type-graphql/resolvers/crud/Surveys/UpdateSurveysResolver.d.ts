import { GraphQLResolveInfo } from "graphql";
import { UpdateSurveysArgs } from "./args/UpdateSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class UpdateSurveysResolver {
    updateSurveys(ctx: any, info: GraphQLResolveInfo, args: UpdateSurveysArgs): Promise<Surveys | null>;
}
