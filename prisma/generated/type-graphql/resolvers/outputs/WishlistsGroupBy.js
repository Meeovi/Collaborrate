"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const WishlistsAvgAggregate_1 = require("../outputs/WishlistsAvgAggregate");
const WishlistsCountAggregate_1 = require("../outputs/WishlistsCountAggregate");
const WishlistsMaxAggregate_1 = require("../outputs/WishlistsMaxAggregate");
const WishlistsMinAggregate_1 = require("../outputs/WishlistsMinAggregate");
const WishlistsSumAggregate_1 = require("../outputs/WishlistsSumAggregate");
let WishlistsGroupBy = class WishlistsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WishlistsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WishlistsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsGroupBy.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsGroupBy.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsGroupBy.prototype, "occassions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsCountAggregate_1.WishlistsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsCountAggregate_1.WishlistsCountAggregate)
], WishlistsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsAvgAggregate_1.WishlistsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsAvgAggregate_1.WishlistsAvgAggregate)
], WishlistsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsSumAggregate_1.WishlistsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsSumAggregate_1.WishlistsSumAggregate)
], WishlistsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsMinAggregate_1.WishlistsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsMinAggregate_1.WishlistsMinAggregate)
], WishlistsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsMaxAggregate_1.WishlistsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsMaxAggregate_1.WishlistsMaxAggregate)
], WishlistsGroupBy.prototype, "_max", void 0);
WishlistsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WishlistsGroupBy", {
        isAbstract: true
    })
], WishlistsGroupBy);
exports.WishlistsGroupBy = WishlistsGroupBy;
