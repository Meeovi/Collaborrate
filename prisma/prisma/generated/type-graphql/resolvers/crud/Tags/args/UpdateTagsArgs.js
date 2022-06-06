"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsUpdateInput_1 = require("../../../inputs/TagsUpdateInput");
const TagsWhereUniqueInput_1 = require("../../../inputs/TagsWhereUniqueInput");
let UpdateTagsArgs = class UpdateTagsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsUpdateInput_1.TagsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsUpdateInput_1.TagsUpdateInput)
], UpdateTagsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], UpdateTagsArgs.prototype, "where", void 0);
UpdateTagsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTagsArgs);
exports.UpdateTagsArgs = UpdateTagsArgs;
