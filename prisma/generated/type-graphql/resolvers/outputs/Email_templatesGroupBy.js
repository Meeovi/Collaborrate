"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Email_templatesAvgAggregate_1 = require("../outputs/Email_templatesAvgAggregate");
const Email_templatesCountAggregate_1 = require("../outputs/Email_templatesCountAggregate");
const Email_templatesMaxAggregate_1 = require("../outputs/Email_templatesMaxAggregate");
const Email_templatesMinAggregate_1 = require("../outputs/Email_templatesMinAggregate");
const Email_templatesSumAggregate_1 = require("../outputs/Email_templatesSumAggregate");
let Email_templatesGroupBy = class Email_templatesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Email_templatesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Email_templatesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "insert_variable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "width", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Email_templatesGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesCountAggregate_1.Email_templatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesCountAggregate_1.Email_templatesCountAggregate)
], Email_templatesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesAvgAggregate_1.Email_templatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesAvgAggregate_1.Email_templatesAvgAggregate)
], Email_templatesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesSumAggregate_1.Email_templatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesSumAggregate_1.Email_templatesSumAggregate)
], Email_templatesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesMinAggregate_1.Email_templatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesMinAggregate_1.Email_templatesMinAggregate)
], Email_templatesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesMaxAggregate_1.Email_templatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesMaxAggregate_1.Email_templatesMaxAggregate)
], Email_templatesGroupBy.prototype, "_max", void 0);
Email_templatesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Email_templatesGroupBy", {
        isAbstract: true
    })
], Email_templatesGroupBy);
exports.Email_templatesGroupBy = Email_templatesGroupBy;
