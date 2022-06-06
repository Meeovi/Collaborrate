import { GraphQLResolveInfo } from "graphql";
import { DeleteManySurveysArgs } from "./args/DeleteManySurveysArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySurveysResolver {
    deleteManySurveys(ctx: any, info: GraphQLResolveInfo, args: DeleteManySurveysArgs): Promise<AffectedRowsOutput>;
}
