"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const WebsitesAvgAggregate_1 = require("../outputs/WebsitesAvgAggregate");
const WebsitesCountAggregate_1 = require("../outputs/WebsitesCountAggregate");
const WebsitesMaxAggregate_1 = require("../outputs/WebsitesMaxAggregate");
const WebsitesMinAggregate_1 = require("../outputs/WebsitesMinAggregate");
const WebsitesSumAggregate_1 = require("../outputs/WebsitesSumAggregate");
let WebsitesGroupBy = class WebsitesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WebsitesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WebsitesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesGroupBy.prototype, "shop", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesGroupBy.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesGroupBy.prototype, "themes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCountAggregate_1.WebsitesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesCountAggregate_1.WebsitesCountAggregate)
], WebsitesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesAvgAggregate_1.WebsitesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesAvgAggregate_1.WebsitesAvgAggregate)
], WebsitesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesSumAggregate_1.WebsitesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesSumAggregate_1.WebsitesSumAggregate)
], WebsitesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesMinAggregate_1.WebsitesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesMinAggregate_1.WebsitesMinAggregate)
], WebsitesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesMaxAggregate_1.WebsitesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesMaxAggregate_1.WebsitesMaxAggregate)
], WebsitesGroupBy.prototype, "_max", void 0);
WebsitesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WebsitesGroupBy", {
        isAbstract: true
    })
], WebsitesGroupBy);
exports.WebsitesGroupBy = WebsitesGroupBy;
