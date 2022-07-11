import * as TypeGraphQL from "type-graphql";
import { Customers } from "../../../models/Customers";
import { Emails } from "../../../models/Emails";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Emails)
export class EmailsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() emails: Emails, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).emails.findUnique({
      where: {
        id: emails.id,
      },
    }).customers({});
  }

  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: true
  })
  async users(@TypeGraphQL.Root() emails: Emails, @TypeGraphQL.Ctx() ctx: any): Promise<Users | null> {
    return getPrismaFromContext(ctx).emails.findUnique({
      where: {
        id: emails.id,
      },
    }).users({});
  }
}
