"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesAvgAggregate_1 = require("../outputs/StatesAvgAggregate");
const StatesCountAggregate_1 = require("../outputs/StatesCountAggregate");
const StatesMaxAggregate_1 = require("../outputs/StatesMaxAggregate");
const StatesMinAggregate_1 = require("../outputs/StatesMinAggregate");
const StatesSumAggregate_1 = require("../outputs/StatesSumAggregate");
let StatesGroupBy = class StatesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StatesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesGroupBy.prototype, "trainings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesCountAggregate_1.StatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesCountAggregate_1.StatesCountAggregate)
], StatesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesAvgAggregate_1.StatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesAvgAggregate_1.StatesAvgAggregate)
], StatesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesSumAggregate_1.StatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesSumAggregate_1.StatesSumAggregate)
], StatesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesMinAggregate_1.StatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesMinAggregate_1.StatesMinAggregate)
], StatesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesMaxAggregate_1.StatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesMaxAggregate_1.StatesMaxAggregate)
], StatesGroupBy.prototype, "_max", void 0);
StatesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatesGroupBy", {
        isAbstract: true
    })
], StatesGroupBy);
exports.StatesGroupBy = StatesGroupBy;
