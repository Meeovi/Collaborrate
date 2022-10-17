import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSurveysArgs } from "./args/DeleteOneSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class DeleteOneSurveysResolver {
    deleteOneSurveys(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSurveysArgs): Promise<Surveys | null>;
}
