"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOoto = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoAvgAggregate_1 = require("../outputs/OotoAvgAggregate");
const OotoCountAggregate_1 = require("../outputs/OotoCountAggregate");
const OotoMaxAggregate_1 = require("../outputs/OotoMaxAggregate");
const OotoMinAggregate_1 = require("../outputs/OotoMinAggregate");
const OotoSumAggregate_1 = require("../outputs/OotoSumAggregate");
let AggregateOoto = class AggregateOoto {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoCountAggregate_1.OotoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoCountAggregate_1.OotoCountAggregate)
], AggregateOoto.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoAvgAggregate_1.OotoAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoAvgAggregate_1.OotoAvgAggregate)
], AggregateOoto.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoSumAggregate_1.OotoSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoSumAggregate_1.OotoSumAggregate)
], AggregateOoto.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoMinAggregate_1.OotoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoMinAggregate_1.OotoMinAggregate)
], AggregateOoto.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoMaxAggregate_1.OotoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoMaxAggregate_1.OotoMaxAggregate)
], AggregateOoto.prototype, "_max", void 0);
AggregateOoto = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateOoto", {
        isAbstract: true
    })
], AggregateOoto);
exports.AggregateOoto = AggregateOoto;
