"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateApitoken = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenAvgAggregate_1 = require("../outputs/ApitokenAvgAggregate");
const ApitokenCountAggregate_1 = require("../outputs/ApitokenCountAggregate");
const ApitokenMaxAggregate_1 = require("../outputs/ApitokenMaxAggregate");
const ApitokenMinAggregate_1 = require("../outputs/ApitokenMinAggregate");
const ApitokenSumAggregate_1 = require("../outputs/ApitokenSumAggregate");
let AggregateApitoken = class AggregateApitoken {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenCountAggregate_1.ApitokenCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenCountAggregate_1.ApitokenCountAggregate)
], AggregateApitoken.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenAvgAggregate_1.ApitokenAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenAvgAggregate_1.ApitokenAvgAggregate)
], AggregateApitoken.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenSumAggregate_1.ApitokenSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenSumAggregate_1.ApitokenSumAggregate)
], AggregateApitoken.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenMinAggregate_1.ApitokenMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenMinAggregate_1.ApitokenMinAggregate)
], AggregateApitoken.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenMaxAggregate_1.ApitokenMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenMaxAggregate_1.ApitokenMaxAggregate)
], AggregateApitoken.prototype, "_max", void 0);
AggregateApitoken = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateApitoken", {
        isAbstract: true
    })
], AggregateApitoken);
exports.AggregateApitoken = AggregateApitoken;
