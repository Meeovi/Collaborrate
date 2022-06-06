"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsOrderByWithRelationInput_1 = require("../../../inputs/General_settingsOrderByWithRelationInput");
const General_settingsWhereInput_1 = require("../../../inputs/General_settingsWhereInput");
const General_settingsWhereUniqueInput_1 = require("../../../inputs/General_settingsWhereUniqueInput");
const General_settingsScalarFieldEnum_1 = require("../../../../enums/General_settingsScalarFieldEnum");
let FindFirstGeneral_settingsArgs = class FindFirstGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereInput_1.General_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsWhereInput_1.General_settingsWhereInput)
], FindFirstGeneral_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [General_settingsOrderByWithRelationInput_1.General_settingsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstGeneral_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput)
], FindFirstGeneral_settingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstGeneral_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstGeneral_settingsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [General_settingsScalarFieldEnum_1.General_settingsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstGeneral_settingsArgs.prototype, "distinct", void 0);
FindFirstGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstGeneral_settingsArgs);
exports.FindFirstGeneral_settingsArgs = FindFirstGeneral_settingsArgs;
