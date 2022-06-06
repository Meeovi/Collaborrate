import { GraphQLResolveInfo } from "graphql";
import { FindFirstSurveysArgs } from "./args/FindFirstSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class FindFirstSurveysResolver {
    findFirstSurveys(ctx: any, info: GraphQLResolveInfo, args: FindFirstSurveysArgs): Promise<Surveys | null>;
}
