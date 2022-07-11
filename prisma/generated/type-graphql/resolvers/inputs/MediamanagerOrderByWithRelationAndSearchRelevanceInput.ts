import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AgreementsOrderByWithRelationAndSearchRelevanceInput";
import { BrandsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/BrandsOrderByWithRelationAndSearchRelevanceInput";
import { CommentsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CommentsOrderByWithRelationAndSearchRelevanceInput";
import { CustomersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CustomersOrderByWithRelationAndSearchRelevanceInput";
import { MediamanagerOrderByRelevanceInput } from "../inputs/MediamanagerOrderByRelevanceInput";
import { ProductsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductsOrderByWithRelationAndSearchRelevanceInput";
import { TasksOrderByWithRelationAndSearchRelevanceInput } from "../inputs/TasksOrderByWithRelationAndSearchRelevanceInput";
import { UsersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UsersOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MediamanagerOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class MediamanagerOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  keywords?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tags?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  brands?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiration_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  copyright?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dimensions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  versions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  watermark_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  watermark_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  watermark_media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agreements?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  albums?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  workspace?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  task_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  task_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  task_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  members?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AgreementsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  agreements_agreementsTomediamanager?: AgreementsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customers?: CustomersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => BrandsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  brands_brandsTomediamanager?: BrandsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CommentsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  comments?: CommentsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UsersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  users?: UsersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  products_mediamanagerToproducts?: ProductsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TasksOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  tasks?: TasksOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MediamanagerOrderByRelevanceInput | undefined;
}
