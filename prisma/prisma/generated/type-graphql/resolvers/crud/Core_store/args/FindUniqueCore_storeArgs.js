"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeWhereUniqueInput_1 = require("../../../inputs/Core_storeWhereUniqueInput");
let FindUniqueCore_storeArgs = class FindUniqueCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput)
], FindUniqueCore_storeArgs.prototype, "where", void 0);
FindUniqueCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCore_storeArgs);
exports.FindUniqueCore_storeArgs = FindUniqueCore_storeArgs;
