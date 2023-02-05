"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const LogInAvgAggregate_1 = require("../outputs/LogInAvgAggregate");
const LogInCountAggregate_1 = require("../outputs/LogInCountAggregate");
const LogInMaxAggregate_1 = require("../outputs/LogInMaxAggregate");
const LogInMinAggregate_1 = require("../outputs/LogInMinAggregate");
const LogInSumAggregate_1 = require("../outputs/LogInSumAggregate");
let LogInGroupBy = class LogInGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], LogInGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LogInGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInGroupBy.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInGroupBy.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInGroupBy.prototype, "expiresIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInGroupBy.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInCountAggregate_1.LogInCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInCountAggregate_1.LogInCountAggregate)
], LogInGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInAvgAggregate_1.LogInAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInAvgAggregate_1.LogInAvgAggregate)
], LogInGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInSumAggregate_1.LogInSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInSumAggregate_1.LogInSumAggregate)
], LogInGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInMinAggregate_1.LogInMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInMinAggregate_1.LogInMinAggregate)
], LogInGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInMaxAggregate_1.LogInMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInMaxAggregate_1.LogInMaxAggregate)
], LogInGroupBy.prototype, "_max", void 0);
LogInGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LogInGroupBy", {
        isAbstract: true
    })
], LogInGroupBy);
exports.LogInGroupBy = LogInGroupBy;
