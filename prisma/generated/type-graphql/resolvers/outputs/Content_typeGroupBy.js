"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const Content_typeAvgAggregate_1 = require("../outputs/Content_typeAvgAggregate");
const Content_typeCountAggregate_1 = require("../outputs/Content_typeCountAggregate");
const Content_typeMaxAggregate_1 = require("../outputs/Content_typeMaxAggregate");
const Content_typeMinAggregate_1 = require("../outputs/Content_typeMinAggregate");
const Content_typeSumAggregate_1 = require("../outputs/Content_typeSumAggregate");
let Content_typeGroupBy = class Content_typeGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Content_typeGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Content_typeGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeGroupBy.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Content_typeGroupBy.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], Content_typeGroupBy.prototype, "json", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeGroupBy.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeGroupBy.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Content_typeGroupBy.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Content_typeGroupBy.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Content_typeGroupBy.prototype, "timestamp", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Content_typeGroupBy.prototype, "boolean", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeGroupBy.prototype, "rich_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeGroupBy.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeGroupBy.prototype, "database_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeCountAggregate_1.Content_typeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeCountAggregate_1.Content_typeCountAggregate)
], Content_typeGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeAvgAggregate_1.Content_typeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeAvgAggregate_1.Content_typeAvgAggregate)
], Content_typeGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeSumAggregate_1.Content_typeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeSumAggregate_1.Content_typeSumAggregate)
], Content_typeGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeMinAggregate_1.Content_typeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeMinAggregate_1.Content_typeMinAggregate)
], Content_typeGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeMaxAggregate_1.Content_typeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeMaxAggregate_1.Content_typeMaxAggregate)
], Content_typeGroupBy.prototype, "_max", void 0);
Content_typeGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Content_typeGroupBy", {
        isAbstract: true
    })
], Content_typeGroupBy);
exports.Content_typeGroupBy = Content_typeGroupBy;
