"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsWhereInput_1 = require("../../../inputs/TagsWhereInput");
let DeleteManyTagsArgs = class DeleteManyTagsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsWhereInput_1.TagsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsWhereInput_1.TagsWhereInput)
], DeleteManyTagsArgs.prototype, "where", void 0);
DeleteManyTagsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTagsArgs);
exports.DeleteManyTagsArgs = DeleteManyTagsArgs;
