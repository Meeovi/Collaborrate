"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDeepdive = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveAvgAggregate_1 = require("../outputs/DeepdiveAvgAggregate");
const DeepdiveCountAggregate_1 = require("../outputs/DeepdiveCountAggregate");
const DeepdiveMaxAggregate_1 = require("../outputs/DeepdiveMaxAggregate");
const DeepdiveMinAggregate_1 = require("../outputs/DeepdiveMinAggregate");
const DeepdiveSumAggregate_1 = require("../outputs/DeepdiveSumAggregate");
let AggregateDeepdive = class AggregateDeepdive {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveCountAggregate_1.DeepdiveCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveCountAggregate_1.DeepdiveCountAggregate)
], AggregateDeepdive.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveAvgAggregate_1.DeepdiveAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveAvgAggregate_1.DeepdiveAvgAggregate)
], AggregateDeepdive.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveSumAggregate_1.DeepdiveSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveSumAggregate_1.DeepdiveSumAggregate)
], AggregateDeepdive.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveMinAggregate_1.DeepdiveMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveMinAggregate_1.DeepdiveMinAggregate)
], AggregateDeepdive.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveMaxAggregate_1.DeepdiveMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveMaxAggregate_1.DeepdiveMaxAggregate)
], AggregateDeepdive.prototype, "_max", void 0);
AggregateDeepdive = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDeepdive", {
        isAbstract: true
    })
], AggregateDeepdive);
exports.AggregateDeepdive = AggregateDeepdive;
