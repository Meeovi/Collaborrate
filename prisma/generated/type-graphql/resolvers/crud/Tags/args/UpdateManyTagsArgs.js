"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsUpdateManyMutationInput_1 = require("../../../inputs/TagsUpdateManyMutationInput");
const TagsWhereInput_1 = require("../../../inputs/TagsWhereInput");
let UpdateManyTagsArgs = class UpdateManyTagsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsUpdateManyMutationInput_1.TagsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsUpdateManyMutationInput_1.TagsUpdateManyMutationInput)
], UpdateManyTagsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsWhereInput_1.TagsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsWhereInput_1.TagsWhereInput)
], UpdateManyTagsArgs.prototype, "where", void 0);
UpdateManyTagsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTagsArgs);
exports.UpdateManyTagsArgs = UpdateManyTagsArgs;
