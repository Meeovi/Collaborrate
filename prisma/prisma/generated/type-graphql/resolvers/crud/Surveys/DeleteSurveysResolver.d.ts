import { GraphQLResolveInfo } from "graphql";
import { DeleteSurveysArgs } from "./args/DeleteSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class DeleteSurveysResolver {
    deleteSurveys(ctx: any, info: GraphQLResolveInfo, args: DeleteSurveysArgs): Promise<Surveys | null>;
}
