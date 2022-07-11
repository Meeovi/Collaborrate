import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyGift_certificatesArgs } from "./args/FindManyGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Gift_certificates)
export class FindManyGift_certificatesResolver {
  @TypeGraphQL.Query(_returns => [Gift_certificates], {
    nullable: false
  })
  async findManyGift_certificates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGift_certificatesArgs): Promise<Gift_certificates[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).gift_certificates.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
