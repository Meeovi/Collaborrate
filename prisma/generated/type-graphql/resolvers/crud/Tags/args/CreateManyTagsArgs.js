"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsCreateManyInput_1 = require("../../../inputs/TagsCreateManyInput");
let CreateManyTagsArgs = class CreateManyTagsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsCreateManyInput_1.TagsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTagsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTagsArgs.prototype, "skipDuplicates", void 0);
CreateManyTagsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTagsArgs);
exports.CreateManyTagsArgs = CreateManyTagsArgs;
