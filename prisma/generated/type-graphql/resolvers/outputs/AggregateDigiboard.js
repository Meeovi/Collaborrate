"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDigiboard = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardAvgAggregate_1 = require("../outputs/DigiboardAvgAggregate");
const DigiboardCountAggregate_1 = require("../outputs/DigiboardCountAggregate");
const DigiboardMaxAggregate_1 = require("../outputs/DigiboardMaxAggregate");
const DigiboardMinAggregate_1 = require("../outputs/DigiboardMinAggregate");
const DigiboardSumAggregate_1 = require("../outputs/DigiboardSumAggregate");
let AggregateDigiboard = class AggregateDigiboard {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardCountAggregate_1.DigiboardCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardCountAggregate_1.DigiboardCountAggregate)
], AggregateDigiboard.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardAvgAggregate_1.DigiboardAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardAvgAggregate_1.DigiboardAvgAggregate)
], AggregateDigiboard.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardSumAggregate_1.DigiboardSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardSumAggregate_1.DigiboardSumAggregate)
], AggregateDigiboard.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardMinAggregate_1.DigiboardMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardMinAggregate_1.DigiboardMinAggregate)
], AggregateDigiboard.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardMaxAggregate_1.DigiboardMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardMaxAggregate_1.DigiboardMaxAggregate)
], AggregateDigiboard.prototype, "_max", void 0);
AggregateDigiboard = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDigiboard", {
        isAbstract: true
    })
], AggregateDigiboard);
exports.AggregateDigiboard = AggregateDigiboard;
