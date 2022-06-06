"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesAvgAggregate_1 = require("../outputs/Url_rewritesAvgAggregate");
const Url_rewritesCountAggregate_1 = require("../outputs/Url_rewritesCountAggregate");
const Url_rewritesMaxAggregate_1 = require("../outputs/Url_rewritesMaxAggregate");
const Url_rewritesMinAggregate_1 = require("../outputs/Url_rewritesMinAggregate");
const Url_rewritesSumAggregate_1 = require("../outputs/Url_rewritesSumAggregate");
let Url_rewritesGroupBy = class Url_rewritesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Url_rewritesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesGroupBy.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Url_rewritesGroupBy.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesGroupBy.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesGroupBy.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesCountAggregate_1.Url_rewritesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesCountAggregate_1.Url_rewritesCountAggregate)
], Url_rewritesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesAvgAggregate_1.Url_rewritesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesAvgAggregate_1.Url_rewritesAvgAggregate)
], Url_rewritesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesSumAggregate_1.Url_rewritesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesSumAggregate_1.Url_rewritesSumAggregate)
], Url_rewritesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesMinAggregate_1.Url_rewritesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesMinAggregate_1.Url_rewritesMinAggregate)
], Url_rewritesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesMaxAggregate_1.Url_rewritesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesMaxAggregate_1.Url_rewritesMaxAggregate)
], Url_rewritesGroupBy.prototype, "_max", void 0);
Url_rewritesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Url_rewritesGroupBy", {
        isAbstract: true
    })
], Url_rewritesGroupBy);
exports.Url_rewritesGroupBy = Url_rewritesGroupBy;
