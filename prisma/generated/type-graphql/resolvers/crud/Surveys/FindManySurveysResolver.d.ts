import { GraphQLResolveInfo } from "graphql";
import { FindManySurveysArgs } from "./args/FindManySurveysArgs";
import { Surveys } from "../../../models/Surveys";
export declare class FindManySurveysResolver {
    findManySurveys(ctx: any, info: GraphQLResolveInfo, args: FindManySurveysArgs): Promise<Surveys[]>;
}
