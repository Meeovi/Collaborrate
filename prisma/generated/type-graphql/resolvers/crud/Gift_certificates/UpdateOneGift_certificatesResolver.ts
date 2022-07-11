import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGift_certificatesArgs } from "./args/UpdateOneGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Gift_certificates)
export class UpdateOneGift_certificatesResolver {
  @TypeGraphQL.Mutation(_returns => Gift_certificates, {
    nullable: true
  })
  async updateOneGift_certificates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGift_certificatesArgs): Promise<Gift_certificates | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).gift_certificates.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
