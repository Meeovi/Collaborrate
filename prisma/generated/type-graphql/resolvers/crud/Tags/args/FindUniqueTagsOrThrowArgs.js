"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTagsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsWhereUniqueInput_1 = require("../../../inputs/TagsWhereUniqueInput");
let FindUniqueTagsOrThrowArgs = class FindUniqueTagsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsWhereUniqueInput_1.TagsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsWhereUniqueInput_1.TagsWhereUniqueInput)
], FindUniqueTagsOrThrowArgs.prototype, "where", void 0);
FindUniqueTagsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTagsOrThrowArgs);
exports.FindUniqueTagsOrThrowArgs = FindUniqueTagsOrThrowArgs;
