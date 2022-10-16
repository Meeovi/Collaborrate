"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsAvgAggregate_1 = require("../outputs/PollsAvgAggregate");
const PollsCountAggregate_1 = require("../outputs/PollsCountAggregate");
const PollsMaxAggregate_1 = require("../outputs/PollsMaxAggregate");
const PollsMinAggregate_1 = require("../outputs/PollsMinAggregate");
const PollsSumAggregate_1 = require("../outputs/PollsSumAggregate");
let PollsGroupBy = class PollsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PollsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PollsGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "question", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PollsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsCountAggregate_1.PollsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsCountAggregate_1.PollsCountAggregate)
], PollsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsAvgAggregate_1.PollsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsAvgAggregate_1.PollsAvgAggregate)
], PollsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsSumAggregate_1.PollsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsSumAggregate_1.PollsSumAggregate)
], PollsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsMinAggregate_1.PollsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsMinAggregate_1.PollsMinAggregate)
], PollsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsMaxAggregate_1.PollsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsMaxAggregate_1.PollsMaxAggregate)
], PollsGroupBy.prototype, "_max", void 0);
PollsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PollsGroupBy", {
        isAbstract: true
    })
], PollsGroupBy);
exports.PollsGroupBy = PollsGroupBy;
