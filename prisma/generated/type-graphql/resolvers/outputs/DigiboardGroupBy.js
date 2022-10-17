"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardAvgAggregate_1 = require("../outputs/DigiboardAvgAggregate");
const DigiboardCountAggregate_1 = require("../outputs/DigiboardCountAggregate");
const DigiboardMaxAggregate_1 = require("../outputs/DigiboardMaxAggregate");
const DigiboardMinAggregate_1 = require("../outputs/DigiboardMinAggregate");
const DigiboardSumAggregate_1 = require("../outputs/DigiboardSumAggregate");
let DigiboardGroupBy = class DigiboardGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DigiboardGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardGroupBy.prototype, "board", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], DigiboardGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardGroupBy.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardGroupBy.prototype, "course", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardCountAggregate_1.DigiboardCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardCountAggregate_1.DigiboardCountAggregate)
], DigiboardGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardAvgAggregate_1.DigiboardAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardAvgAggregate_1.DigiboardAvgAggregate)
], DigiboardGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardSumAggregate_1.DigiboardSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardSumAggregate_1.DigiboardSumAggregate)
], DigiboardGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardMinAggregate_1.DigiboardMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardMinAggregate_1.DigiboardMinAggregate)
], DigiboardGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardMaxAggregate_1.DigiboardMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardMaxAggregate_1.DigiboardMaxAggregate)
], DigiboardGroupBy.prototype, "_max", void 0);
DigiboardGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DigiboardGroupBy", {
        isAbstract: true
    })
], DigiboardGroupBy);
exports.DigiboardGroupBy = DigiboardGroupBy;
