"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsWhereUniqueInput = class TagsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsWhereUniqueInput.prototype, "id", void 0);
TagsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsWhereUniqueInput", {
        isAbstract: true
    })
], TagsWhereUniqueInput);
exports.TagsWhereUniqueInput = TagsWhereUniqueInput;
