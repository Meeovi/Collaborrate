"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOrderByWithRelationInput_1 = require("../../../inputs/TagsOrderByWithRelationInput");
const TagsWhereInput_1 = require("../../../inputs/TagsWhereInput");
const TagsWhereUniqueInput_1 = require("../../../inputs/TagsWhereUniqueInput");
const TagsScalarFieldEnum_1 = require("../../../../enums/TagsScalarFieldEnum");
let FindFirstTagsArgs = class FindFirstTagsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsWhereInput_1.TagsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsWhereInput_1.TagsWhereInput)
], FindFirstTagsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOrderByWithRelationInput_1.TagsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTagsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], FindFirstTagsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTagsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTagsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsScalarFieldEnum_1.TagsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTagsArgs.prototype, "distinct", void 0);
FindFirstTagsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTagsArgs);
exports.FindFirstTagsArgs = FindFirstTagsArgs;
