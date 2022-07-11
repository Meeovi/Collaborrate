import * as TypeGraphQL from "type-graphql";
import { Customer_group } from "../../../models/Customer_group";
import { Customers } from "../../../models/Customers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer_group)
export class Customer_groupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() customer_group: Customer_group, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).customer_group.findUnique({
      where: {
        id: customer_group.id,
      },
    }).customers({});
  }
}
