"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomizations = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsAvgAggregate_1 = require("../outputs/CustomizationsAvgAggregate");
const CustomizationsCountAggregate_1 = require("../outputs/CustomizationsCountAggregate");
const CustomizationsMaxAggregate_1 = require("../outputs/CustomizationsMaxAggregate");
const CustomizationsMinAggregate_1 = require("../outputs/CustomizationsMinAggregate");
const CustomizationsSumAggregate_1 = require("../outputs/CustomizationsSumAggregate");
let AggregateCustomizations = class AggregateCustomizations {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsCountAggregate_1.CustomizationsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsCountAggregate_1.CustomizationsCountAggregate)
], AggregateCustomizations.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsAvgAggregate_1.CustomizationsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsAvgAggregate_1.CustomizationsAvgAggregate)
], AggregateCustomizations.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsSumAggregate_1.CustomizationsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsSumAggregate_1.CustomizationsSumAggregate)
], AggregateCustomizations.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsMinAggregate_1.CustomizationsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsMinAggregate_1.CustomizationsMinAggregate)
], AggregateCustomizations.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsMaxAggregate_1.CustomizationsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsMaxAggregate_1.CustomizationsMaxAggregate)
], AggregateCustomizations.prototype, "_max", void 0);
AggregateCustomizations = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCustomizations", {
        isAbstract: true
    })
], AggregateCustomizations);
exports.AggregateCustomizations = AggregateCustomizations;
