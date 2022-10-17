import { GraphQLResolveInfo } from "graphql";
import { DeleteOneGift_certificatesArgs } from "./args/DeleteOneGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class DeleteOneGift_certificatesResolver {
    deleteOneGift_certificates(ctx: any, info: GraphQLResolveInfo, args: DeleteOneGift_certificatesArgs): Promise<Gift_certificates | null>;
}
