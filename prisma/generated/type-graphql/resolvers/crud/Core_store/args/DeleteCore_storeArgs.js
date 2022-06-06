"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeWhereUniqueInput_1 = require("../../../inputs/Core_storeWhereUniqueInput");
let DeleteCore_storeArgs = class DeleteCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput)
], DeleteCore_storeArgs.prototype, "where", void 0);
DeleteCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCore_storeArgs);
exports.DeleteCore_storeArgs = DeleteCore_storeArgs;
