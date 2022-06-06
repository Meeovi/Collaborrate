"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryOrderByWithRelationInput_1 = require("../../../inputs/GlossaryOrderByWithRelationInput");
const GlossaryWhereInput_1 = require("../../../inputs/GlossaryWhereInput");
const GlossaryWhereUniqueInput_1 = require("../../../inputs/GlossaryWhereUniqueInput");
const GlossaryScalarFieldEnum_1 = require("../../../../enums/GlossaryScalarFieldEnum");
let FindFirstGlossaryArgs = class FindFirstGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereInput_1.GlossaryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryWhereInput_1.GlossaryWhereInput)
], FindFirstGlossaryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryOrderByWithRelationInput_1.GlossaryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstGlossaryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput)
], FindFirstGlossaryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstGlossaryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstGlossaryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryScalarFieldEnum_1.GlossaryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstGlossaryArgs.prototype, "distinct", void 0);
FindFirstGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstGlossaryArgs);
exports.FindFirstGlossaryArgs = FindFirstGlossaryArgs;
