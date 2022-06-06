"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceOrderByWithRelationInput_1 = require("../../../inputs/SourceOrderByWithRelationInput");
const SourceWhereInput_1 = require("../../../inputs/SourceWhereInput");
const SourceWhereUniqueInput_1 = require("../../../inputs/SourceWhereUniqueInput");
const SourceScalarFieldEnum_1 = require("../../../../enums/SourceScalarFieldEnum");
let FindManySourceArgs = class FindManySourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereInput_1.SourceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceWhereInput_1.SourceWhereInput)
], FindManySourceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceOrderByWithRelationInput_1.SourceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySourceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereUniqueInput_1.SourceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceWhereUniqueInput_1.SourceWhereUniqueInput)
], FindManySourceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySourceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySourceArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceScalarFieldEnum_1.SourceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySourceArgs.prototype, "distinct", void 0);
FindManySourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySourceArgs);
exports.FindManySourceArgs = FindManySourceArgs;
