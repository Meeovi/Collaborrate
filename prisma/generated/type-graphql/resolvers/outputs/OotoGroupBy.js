"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const OotoAvgAggregate_1 = require("../outputs/OotoAvgAggregate");
const OotoCountAggregate_1 = require("../outputs/OotoCountAggregate");
const OotoMaxAggregate_1 = require("../outputs/OotoMaxAggregate");
const OotoMinAggregate_1 = require("../outputs/OotoMinAggregate");
const OotoSumAggregate_1 = require("../outputs/OotoSumAggregate");
let OotoGroupBy = class OotoGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OotoGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OotoGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoGroupBy.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoGroupBy.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoGroupBy.prototype, "using_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoGroupBy.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoCountAggregate_1.OotoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoCountAggregate_1.OotoCountAggregate)
], OotoGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoAvgAggregate_1.OotoAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoAvgAggregate_1.OotoAvgAggregate)
], OotoGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoSumAggregate_1.OotoSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoSumAggregate_1.OotoSumAggregate)
], OotoGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoMinAggregate_1.OotoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoMinAggregate_1.OotoMinAggregate)
], OotoGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoMaxAggregate_1.OotoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoMaxAggregate_1.OotoMaxAggregate)
], OotoGroupBy.prototype, "_max", void 0);
OotoGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OotoGroupBy", {
        isAbstract: true
    })
], OotoGroupBy);
exports.OotoGroupBy = OotoGroupBy;
