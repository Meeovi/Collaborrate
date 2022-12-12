"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ApitokenAvgAggregate_1 = require("../outputs/ApitokenAvgAggregate");
const ApitokenCountAggregate_1 = require("../outputs/ApitokenCountAggregate");
const ApitokenMaxAggregate_1 = require("../outputs/ApitokenMaxAggregate");
const ApitokenMinAggregate_1 = require("../outputs/ApitokenMinAggregate");
const ApitokenSumAggregate_1 = require("../outputs/ApitokenSumAggregate");
let ApitokenGroupBy = class ApitokenGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ApitokenGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ApitokenGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenGroupBy.prototype, "token_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ApitokenGroupBy.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenCountAggregate_1.ApitokenCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenCountAggregate_1.ApitokenCountAggregate)
], ApitokenGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenAvgAggregate_1.ApitokenAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenAvgAggregate_1.ApitokenAvgAggregate)
], ApitokenGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenSumAggregate_1.ApitokenSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenSumAggregate_1.ApitokenSumAggregate)
], ApitokenGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenMinAggregate_1.ApitokenMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenMinAggregate_1.ApitokenMinAggregate)
], ApitokenGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenMaxAggregate_1.ApitokenMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenMaxAggregate_1.ApitokenMaxAggregate)
], ApitokenGroupBy.prototype, "_max", void 0);
ApitokenGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ApitokenGroupBy", {
        isAbstract: true
    })
], ApitokenGroupBy);
exports.ApitokenGroupBy = ApitokenGroupBy;
