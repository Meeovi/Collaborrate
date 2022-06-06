"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeOrderByWithRelationInput_1 = require("../../../inputs/Core_storeOrderByWithRelationInput");
const Core_storeWhereInput_1 = require("../../../inputs/Core_storeWhereInput");
const Core_storeWhereUniqueInput_1 = require("../../../inputs/Core_storeWhereUniqueInput");
const Core_storeScalarFieldEnum_1 = require("../../../../enums/Core_storeScalarFieldEnum");
let FindManyCore_storeArgs = class FindManyCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereInput_1.Core_storeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeWhereInput_1.Core_storeWhereInput)
], FindManyCore_storeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Core_storeOrderByWithRelationInput_1.Core_storeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCore_storeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput)
], FindManyCore_storeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCore_storeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCore_storeArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Core_storeScalarFieldEnum_1.Core_storeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCore_storeArgs.prototype, "distinct", void 0);
FindManyCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCore_storeArgs);
exports.FindManyCore_storeArgs = FindManyCore_storeArgs;
