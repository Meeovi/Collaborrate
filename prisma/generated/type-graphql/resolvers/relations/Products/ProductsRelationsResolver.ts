import * as TypeGraphQL from "type-graphql";
import { Brands } from "../../../models/Brands";
import { Coupons } from "../../../models/Coupons";
import { Credit_memos } from "../../../models/Credit_memos";
import { Manufacturer } from "../../../models/Manufacturer";
import { Mediamanager } from "../../../models/Mediamanager";
import { Occassions } from "../../../models/Occassions";
import { Orders } from "../../../models/Orders";
import { Product_attribute } from "../../../models/Product_attribute";
import { Product_types } from "../../../models/Product_types";
import { Products } from "../../../models/Products";
import { Quotes } from "../../../models/Quotes";
import { Rating } from "../../../models/Rating";
import { Returns } from "../../../models/Returns";
import { Tax_rate } from "../../../models/Tax_rate";
import { Tax_rule } from "../../../models/Tax_rule";
import { Trainings } from "../../../models/Trainings";
import { Workspaces } from "../../../models/Workspaces";
import { ProductsBrandsArgs } from "./args/ProductsBrandsArgs";
import { ProductsCouponsArgs } from "./args/ProductsCouponsArgs";
import { ProductsCredit_memosArgs } from "./args/ProductsCredit_memosArgs";
import { ProductsManufacturerArgs } from "./args/ProductsManufacturerArgs";
import { ProductsMediamanagerArgs } from "./args/ProductsMediamanagerArgs";
import { ProductsOccassions_occassionsToproductsArgs } from "./args/ProductsOccassions_occassionsToproductsArgs";
import { ProductsOrdersArgs } from "./args/ProductsOrdersArgs";
import { ProductsOther_productsArgs } from "./args/ProductsOther_productsArgs";
import { ProductsProduct_attributeArgs } from "./args/ProductsProduct_attributeArgs";
import { ProductsProduct_typesArgs } from "./args/ProductsProduct_typesArgs";
import { ProductsQuotesArgs } from "./args/ProductsQuotesArgs";
import { ProductsRatingArgs } from "./args/ProductsRatingArgs";
import { ProductsReturnsArgs } from "./args/ProductsReturnsArgs";
import { ProductsTax_rateArgs } from "./args/ProductsTax_rateArgs";
import { ProductsTax_ruleArgs } from "./args/ProductsTax_ruleArgs";
import { ProductsTrainingsArgs } from "./args/ProductsTrainingsArgs";
import { ProductsWorkspacesArgs } from "./args/ProductsWorkspacesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Products)
export class ProductsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async products(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any): Promise<Products | null> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).products({});
  }

  @TypeGraphQL.FieldResolver(_type => [Brands], {
    nullable: false
  })
  async brands(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsBrandsArgs): Promise<Brands[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).brands(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Coupons], {
    nullable: false
  })
  async coupons(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsCouponsArgs): Promise<Coupons[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).coupons(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Credit_memos], {
    nullable: false
  })
  async credit_memos(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsCredit_memosArgs): Promise<Credit_memos[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).credit_memos(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Manufacturer], {
    nullable: false
  })
  async manufacturer(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsManufacturerArgs): Promise<Manufacturer[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).manufacturer(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Mediamanager], {
    nullable: false
  })
  async mediamanager(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsMediamanagerArgs): Promise<Mediamanager[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).mediamanager(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Occassions], {
    nullable: false
  })
  async occassions_occassionsToproducts(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsOccassions_occassionsToproductsArgs): Promise<Occassions[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).occassions_occassionsToproducts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Orders], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsOrdersArgs): Promise<Orders[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).orders(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Product_attribute], {
    nullable: false
  })
  async product_attribute(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsProduct_attributeArgs): Promise<Product_attribute[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).product_attribute(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Product_types], {
    nullable: false
  })
  async product_types(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsProduct_typesArgs): Promise<Product_types[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).product_types(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Products], {
    nullable: false
  })
  async other_products(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsOther_productsArgs): Promise<Products[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).other_products(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Quotes], {
    nullable: false
  })
  async quotes(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsQuotesArgs): Promise<Quotes[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).quotes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Rating], {
    nullable: false
  })
  async rating(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsRatingArgs): Promise<Rating[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).rating(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Returns], {
    nullable: false
  })
  async returns(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsReturnsArgs): Promise<Returns[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).returns(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Tax_rate], {
    nullable: false
  })
  async tax_rate(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsTax_rateArgs): Promise<Tax_rate[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).tax_rate(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Tax_rule], {
    nullable: false
  })
  async tax_rule(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsTax_ruleArgs): Promise<Tax_rule[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).tax_rule(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Trainings], {
    nullable: false
  })
  async trainings(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsTrainingsArgs): Promise<Trainings[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).trainings(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Workspaces], {
    nullable: false
  })
  async workspaces(@TypeGraphQL.Root() products: Products, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductsWorkspacesArgs): Promise<Workspaces[]> {
    return getPrismaFromContext(ctx).products.findUnique({
      where: {
        id: products.id,
      },
    }).workspaces(args);
  }
}
