"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAttributesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesWhereUniqueInput_1 = require("../../../inputs/AttributesWhereUniqueInput");
let FindUniqueAttributesOrThrowArgs = class FindUniqueAttributesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereUniqueInput_1.AttributesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesWhereUniqueInput_1.AttributesWhereUniqueInput)
], FindUniqueAttributesOrThrowArgs.prototype, "where", void 0);
FindUniqueAttributesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAttributesOrThrowArgs);
exports.FindUniqueAttributesOrThrowArgs = FindUniqueAttributesOrThrowArgs;
