import { GraphQLResolveInfo } from "graphql";
import { UpdateManySurveysArgs } from "./args/UpdateManySurveysArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySurveysResolver {
    updateManySurveys(ctx: any, info: GraphQLResolveInfo, args: UpdateManySurveysArgs): Promise<AffectedRowsOutput>;
}
