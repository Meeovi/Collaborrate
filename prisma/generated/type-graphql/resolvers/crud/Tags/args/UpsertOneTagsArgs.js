"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsCreateInput_1 = require("../../../inputs/TagsCreateInput");
const TagsUpdateInput_1 = require("../../../inputs/TagsUpdateInput");
const TagsWhereUniqueInput_1 = require("../../../inputs/TagsWhereUniqueInput");
let UpsertOneTagsArgs = class UpsertOneTagsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], UpsertOneTagsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsCreateInput_1.TagsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsCreateInput_1.TagsCreateInput)
], UpsertOneTagsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsUpdateInput_1.TagsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsUpdateInput_1.TagsUpdateInput)
], UpsertOneTagsArgs.prototype, "update", void 0);
UpsertOneTagsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTagsArgs);
exports.UpsertOneTagsArgs = UpsertOneTagsArgs;
