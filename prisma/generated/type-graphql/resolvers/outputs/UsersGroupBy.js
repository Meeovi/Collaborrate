"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const UsersAvgAggregate_1 = require("../outputs/UsersAvgAggregate");
const UsersCountAggregate_1 = require("../outputs/UsersCountAggregate");
const UsersMaxAggregate_1 = require("../outputs/UsersMaxAggregate");
const UsersMinAggregate_1 = require("../outputs/UsersMinAggregate");
const UsersSumAggregate_1 = require("../outputs/UsersSumAggregate");
let UsersGroupBy = class UsersGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], UsersGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "interface_locale", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "permissions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UsersGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "mediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "messages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersGroupBy.prototype, "workspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersCountAggregate_1.UsersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersCountAggregate_1.UsersCountAggregate)
], UsersGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersAvgAggregate_1.UsersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersAvgAggregate_1.UsersAvgAggregate)
], UsersGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersSumAggregate_1.UsersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersSumAggregate_1.UsersSumAggregate)
], UsersGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersMinAggregate_1.UsersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersMinAggregate_1.UsersMinAggregate)
], UsersGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsersMaxAggregate_1.UsersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsersMaxAggregate_1.UsersMaxAggregate)
], UsersGroupBy.prototype, "_max", void 0);
UsersGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UsersGroupBy", {
        isAbstract: true
    })
], UsersGroupBy);
exports.UsersGroupBy = UsersGroupBy;
