"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesCreateInput_1 = require("../../../inputs/AttributesCreateInput");
const AttributesUpdateInput_1 = require("../../../inputs/AttributesUpdateInput");
const AttributesWhereUniqueInput_1 = require("../../../inputs/AttributesWhereUniqueInput");
let UpsertOneAttributesArgs = class UpsertOneAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereUniqueInput_1.AttributesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesWhereUniqueInput_1.AttributesWhereUniqueInput)
], UpsertOneAttributesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesCreateInput_1.AttributesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesCreateInput_1.AttributesCreateInput)
], UpsertOneAttributesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesUpdateInput_1.AttributesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesUpdateInput_1.AttributesUpdateInput)
], UpsertOneAttributesArgs.prototype, "update", void 0);
UpsertOneAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAttributesArgs);
exports.UpsertOneAttributesArgs = UpsertOneAttributesArgs;
