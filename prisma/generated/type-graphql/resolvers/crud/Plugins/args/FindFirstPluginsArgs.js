"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsOrderByWithRelationInput_1 = require("../../../inputs/PluginsOrderByWithRelationInput");
const PluginsWhereInput_1 = require("../../../inputs/PluginsWhereInput");
const PluginsWhereUniqueInput_1 = require("../../../inputs/PluginsWhereUniqueInput");
const PluginsScalarFieldEnum_1 = require("../../../../enums/PluginsScalarFieldEnum");
let FindFirstPluginsArgs = class FindFirstPluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereInput_1.PluginsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsWhereInput_1.PluginsWhereInput)
], FindFirstPluginsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PluginsOrderByWithRelationInput_1.PluginsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPluginsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereUniqueInput_1.PluginsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsWhereUniqueInput_1.PluginsWhereUniqueInput)
], FindFirstPluginsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPluginsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPluginsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PluginsScalarFieldEnum_1.PluginsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPluginsArgs.prototype, "distinct", void 0);
FindFirstPluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPluginsArgs);
exports.FindFirstPluginsArgs = FindFirstPluginsArgs;
