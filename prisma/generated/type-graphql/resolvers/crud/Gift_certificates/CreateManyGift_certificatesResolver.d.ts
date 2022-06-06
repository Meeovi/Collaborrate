import { GraphQLResolveInfo } from "graphql";
import { CreateManyGift_certificatesArgs } from "./args/CreateManyGift_certificatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyGift_certificatesResolver {
    createManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: CreateManyGift_certificatesArgs): Promise<AffectedRowsOutput>;
}
