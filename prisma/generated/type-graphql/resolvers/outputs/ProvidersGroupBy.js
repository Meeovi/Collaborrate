"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ProvidersAvgAggregate_1 = require("../outputs/ProvidersAvgAggregate");
const ProvidersCountAggregate_1 = require("../outputs/ProvidersCountAggregate");
const ProvidersMaxAggregate_1 = require("../outputs/ProvidersMaxAggregate");
const ProvidersMinAggregate_1 = require("../outputs/ProvidersMinAggregate");
const ProvidersSumAggregate_1 = require("../outputs/ProvidersSumAggregate");
let ProvidersGroupBy = class ProvidersGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProvidersGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProvidersGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "host_uri", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "redirect_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "redirect_url_app", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersGroupBy.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCountAggregate_1.ProvidersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCountAggregate_1.ProvidersCountAggregate)
], ProvidersGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersAvgAggregate_1.ProvidersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersAvgAggregate_1.ProvidersAvgAggregate)
], ProvidersGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersSumAggregate_1.ProvidersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersSumAggregate_1.ProvidersSumAggregate)
], ProvidersGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersMinAggregate_1.ProvidersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersMinAggregate_1.ProvidersMinAggregate)
], ProvidersGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersMaxAggregate_1.ProvidersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersMaxAggregate_1.ProvidersMaxAggregate)
], ProvidersGroupBy.prototype, "_max", void 0);
ProvidersGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProvidersGroupBy", {
        isAbstract: true
    })
], ProvidersGroupBy);
exports.ProvidersGroupBy = ProvidersGroupBy;
