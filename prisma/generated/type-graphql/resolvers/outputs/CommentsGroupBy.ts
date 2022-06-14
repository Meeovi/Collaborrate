import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsAvgAggregate } from "../outputs/CommentsAvgAggregate";
import { CommentsCountAggregate } from "../outputs/CommentsCountAggregate";
import { CommentsMaxAggregate } from "../outputs/CommentsMaxAggregate";
import { CommentsMinAggregate } from "../outputs/CommentsMinAggregate";
import { CommentsSumAggregate } from "../outputs/CommentsSumAggregate";

@TypeGraphQL.ObjectType("CommentsGroupBy", {
  isAbstract: true
})
export class CommentsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customer_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  response!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => CommentsCountAggregate, {
    nullable: true
  })
  _count!: CommentsCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentsAvgAggregate, {
    nullable: true
  })
  _avg!: CommentsAvgAggregate | null;

  @TypeGraphQL.Field(_type => CommentsSumAggregate, {
    nullable: true
  })
  _sum!: CommentsSumAggregate | null;

  @TypeGraphQL.Field(_type => CommentsMinAggregate, {
    nullable: true
  })
  _min!: CommentsMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentsMaxAggregate, {
    nullable: true
  })
  _max!: CommentsMaxAggregate | null;
}
