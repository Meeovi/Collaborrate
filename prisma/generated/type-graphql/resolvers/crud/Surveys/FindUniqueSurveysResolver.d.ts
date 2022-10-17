import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSurveysArgs } from "./args/FindUniqueSurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class FindUniqueSurveysResolver {
    findUniqueSurveys(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSurveysArgs): Promise<Surveys | null>;
}
