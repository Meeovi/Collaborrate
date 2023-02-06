"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTemplatesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesWhereUniqueInput_1 = require("../../../inputs/TemplatesWhereUniqueInput");
let FindUniqueTemplatesOrThrowArgs = class FindUniqueTemplatesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput)
], FindUniqueTemplatesOrThrowArgs.prototype, "where", void 0);
FindUniqueTemplatesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTemplatesOrThrowArgs);
exports.FindUniqueTemplatesOrThrowArgs = FindUniqueTemplatesOrThrowArgs;
