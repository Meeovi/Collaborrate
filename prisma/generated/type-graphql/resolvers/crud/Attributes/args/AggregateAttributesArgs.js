"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesOrderByWithRelationInput_1 = require("../../../inputs/AttributesOrderByWithRelationInput");
const AttributesWhereInput_1 = require("../../../inputs/AttributesWhereInput");
const AttributesWhereUniqueInput_1 = require("../../../inputs/AttributesWhereUniqueInput");
let AggregateAttributesArgs = class AggregateAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereInput_1.AttributesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesWhereInput_1.AttributesWhereInput)
], AggregateAttributesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttributesOrderByWithRelationInput_1.AttributesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAttributesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereUniqueInput_1.AttributesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesWhereUniqueInput_1.AttributesWhereUniqueInput)
], AggregateAttributesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAttributesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAttributesArgs.prototype, "skip", void 0);
AggregateAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAttributesArgs);
exports.AggregateAttributesArgs = AggregateAttributesArgs;
