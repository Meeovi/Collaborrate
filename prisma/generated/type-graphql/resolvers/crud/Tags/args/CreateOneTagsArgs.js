"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsCreateInput_1 = require("../../../inputs/TagsCreateInput");
let CreateOneTagsArgs = class CreateOneTagsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsCreateInput_1.TagsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsCreateInput_1.TagsCreateInput)
], CreateOneTagsArgs.prototype, "data", void 0);
CreateOneTagsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTagsArgs);
exports.CreateOneTagsArgs = CreateOneTagsArgs;
