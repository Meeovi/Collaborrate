"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const PermissionsAvgAggregate_1 = require("../outputs/PermissionsAvgAggregate");
const PermissionsCountAggregate_1 = require("../outputs/PermissionsCountAggregate");
const PermissionsMaxAggregate_1 = require("../outputs/PermissionsMaxAggregate");
const PermissionsMinAggregate_1 = require("../outputs/PermissionsMinAggregate");
const PermissionsSumAggregate_1 = require("../outputs/PermissionsSumAggregate");
let PermissionsGroupBy = class PermissionsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], PermissionsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PermissionsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsGroupBy.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsGroupBy.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsGroupBy.prototype, "read", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsGroupBy.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsGroupBy.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsCountAggregate_1.PermissionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsCountAggregate_1.PermissionsCountAggregate)
], PermissionsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsAvgAggregate_1.PermissionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsAvgAggregate_1.PermissionsAvgAggregate)
], PermissionsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsSumAggregate_1.PermissionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsSumAggregate_1.PermissionsSumAggregate)
], PermissionsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsMinAggregate_1.PermissionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsMinAggregate_1.PermissionsMinAggregate)
], PermissionsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsMaxAggregate_1.PermissionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsMaxAggregate_1.PermissionsMaxAggregate)
], PermissionsGroupBy.prototype, "_max", void 0);
PermissionsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PermissionsGroupBy", {
        isAbstract: true
    })
], PermissionsGroupBy);
exports.PermissionsGroupBy = PermissionsGroupBy;
