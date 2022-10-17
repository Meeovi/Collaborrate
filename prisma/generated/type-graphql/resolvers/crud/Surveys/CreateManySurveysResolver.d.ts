import { GraphQLResolveInfo } from "graphql";
import { CreateManySurveysArgs } from "./args/CreateManySurveysArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySurveysResolver {
    createManySurveys(ctx: any, info: GraphQLResolveInfo, args: CreateManySurveysArgs): Promise<AffectedRowsOutput>;
}
