"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesWhereUniqueInput_1 = require("../../../inputs/AttributesWhereUniqueInput");
let FindUniqueAttributesArgs = class FindUniqueAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereUniqueInput_1.AttributesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttributesWhereUniqueInput_1.AttributesWhereUniqueInput)
], FindUniqueAttributesArgs.prototype, "where", void 0);
FindUniqueAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAttributesArgs);
exports.FindUniqueAttributesArgs = FindUniqueAttributesArgs;
