import * as TypeGraphQL from "type-graphql";
import { Comments } from "../../../models/Comments";
import { Credit_memos } from "../../../models/Credit_memos";
import { Customer_group } from "../../../models/Customer_group";
import { Customer_payment } from "../../../models/Customer_payment";
import { Customers } from "../../../models/Customers";
import { Emails } from "../../../models/Emails";
import { Mediamanager } from "../../../models/Mediamanager";
import { Messages } from "../../../models/Messages";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
import { Orders } from "../../../models/Orders";
import { Projects } from "../../../models/Projects";
import { Quotes } from "../../../models/Quotes";
import { Returns } from "../../../models/Returns";
import { Workspaces } from "../../../models/Workspaces";
import { CustomersCommentsArgs } from "./args/CustomersCommentsArgs";
import { CustomersCredit_memosArgs } from "./args/CustomersCredit_memosArgs";
import { CustomersCustomer_group_customer_groupTocustomersArgs } from "./args/CustomersCustomer_group_customer_groupTocustomersArgs";
import { CustomersEmailsArgs } from "./args/CustomersEmailsArgs";
import { CustomersMediamanagerArgs } from "./args/CustomersMediamanagerArgs";
import { CustomersMessagesArgs } from "./args/CustomersMessagesArgs";
import { CustomersNewsletter_subscribersArgs } from "./args/CustomersNewsletter_subscribersArgs";
import { CustomersOrdersArgs } from "./args/CustomersOrdersArgs";
import { CustomersProjectsArgs } from "./args/CustomersProjectsArgs";
import { CustomersQuotesArgs } from "./args/CustomersQuotesArgs";
import { CustomersReturnsArgs } from "./args/CustomersReturnsArgs";
import { CustomersWorkspacesArgs } from "./args/CustomersWorkspacesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customers)
export class CustomersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Comments], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersCommentsArgs): Promise<Comments[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Credit_memos], {
    nullable: false
  })
  async credit_memos(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersCredit_memosArgs): Promise<Credit_memos[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).credit_memos(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Customer_group], {
    nullable: false
  })
  async customer_group_customer_groupTocustomers(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersCustomer_group_customer_groupTocustomersArgs): Promise<Customer_group[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).customer_group_customer_groupTocustomers(args);
  }

  @TypeGraphQL.FieldResolver(_type => Customer_payment, {
    nullable: true
  })
  async customer_payment(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any): Promise<Customer_payment | null> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).customer_payment({});
  }

  @TypeGraphQL.FieldResolver(_type => [Emails], {
    nullable: false
  })
  async emails(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersEmailsArgs): Promise<Emails[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).emails(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Mediamanager], {
    nullable: false
  })
  async mediamanager(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersMediamanagerArgs): Promise<Mediamanager[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).mediamanager(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Messages], {
    nullable: false
  })
  async messages(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersMessagesArgs): Promise<Messages[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).messages(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Newsletter_subscribers], {
    nullable: false
  })
  async newsletter_subscribers(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersNewsletter_subscribersArgs): Promise<Newsletter_subscribers[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).newsletter_subscribers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Orders], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersOrdersArgs): Promise<Orders[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).orders(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Projects], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersProjectsArgs): Promise<Projects[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).projects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Quotes], {
    nullable: false
  })
  async quotes(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersQuotesArgs): Promise<Quotes[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).quotes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Returns], {
    nullable: false
  })
  async returns(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersReturnsArgs): Promise<Returns[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).returns(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Workspaces], {
    nullable: false
  })
  async workspaces(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersWorkspacesArgs): Promise<Workspaces[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        id: customers.id,
      },
    }).workspaces(args);
  }
}
